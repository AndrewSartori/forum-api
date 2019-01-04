const mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
    text: String,
    createdAt: { 
        type: Date, 
        default: Date.now
    },
    isDeleted: { 
        type: Boolean, 
        default: false 
    },
    _author: {
        // It would be stupid to just record the author as their ID, thus, I will store both the author's ID as well as their username
        id: {
            type: mongoose.Schema.Types.ObjectId,
            // "ref" is the model I am referring to with this ObjectId
            ref: "User"
        },
        username: String
    },
    _question: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Question" 
    }
});

module.exports =  mongoose.model("Comment", commentSchema);