const express = require("express");
const app = express();
const SERVER_PORT = 3000;

app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>");
});

// Query string Parameters
//http://localhost:3000/user?fnm=Ramtin&lnm=Abolfazli
app.get("/user", (req, res) => {
    const fnm = req.query.fnm;
    const lnm = req.query.lnm;
    res.send(`The first name is ${fnm}, and the last name is ${lnm}.`);
});


// Route parameters
//http://localhost:3000/user/:firstName/:lastName
app.post('/user/:firstname/:lastname', (req, res) => {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;

    // Return JSON response with the firstname and lastname
    res.json({
        firstname: firstname,
        lastname: lastname
    });
});


// Add this line to start the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
