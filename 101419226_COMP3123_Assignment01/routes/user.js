const express = require('express');
const router = express.Router();
const userModel = require("../models/users")
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");


router.post("/signup", 
    [body('email').isEmail().withMessage("Invalid Email address. "),
     body('password').isLength({min: 6}).withMessage("Password should at least have 6 characters")   
    ],
    async (req, res)=> {
    const { username, email, password, createdAt, updatedAt } = req.body;
    try {
        const existingUsername = await userModel.findOne({ username: req.body.username });
        if (existingUsername) {
            return res.status(400).send({ message: "Username already exists." });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email address already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({ username, email, password: hashedPassword, createdAt, updatedAt});
        await newUser.save();

        return res.status(201).json({ message: "User created successfully.", user_id: newUser._id });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: "Server error" });
    }
})

router.post("/login", 
    [body('email').isEmail().withMessage("Invalid Email address. "),
    body('password').isLength({min: 6}).withMessage("Password should at least have 6 characters")   
    ]
       ,
       async (req, res)=> {
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User with this email not found!" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Password is incorrect!" });
        }

        return res.status(200).send({message: "Login Successful."  });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" });
    }

});  

module.exports = router;
