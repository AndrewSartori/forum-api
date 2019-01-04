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
        id: {
            type: mongoose.Schema.Types.ObjectId,
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