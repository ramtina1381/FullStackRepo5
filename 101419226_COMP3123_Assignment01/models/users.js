const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }, 
    updatedAt: {
        type: Date, 
        default: Date.now()
    }
});

// Hash password before saving to the database
// userSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) return next();
//     const hashedPassword = await bcrypt.hash(this.password, 10);
//     this.password = hashedPassword;
//     next();
// });

const User = mongoose.model('User', userSchema);

module.exports = User;
