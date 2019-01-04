const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        // required: true,
        // minlength: [5, "You need a PASSWORD longer than 5 characters, ya idiot"]
    },
    password: {
        type: String,
        // required: true,
        // minlength: [5, "You need a PASSWORD longer than 5 characters, ya idiot"],
    },
    createdAt: { 
        type: Date, 
        default: Date.now
    },
    isDeleted: { 
        type: Boolean, 
        default: false 
    }
});

module.exports =  mongoose.model("User", userSchema);