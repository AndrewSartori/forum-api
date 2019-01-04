const mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
   title: String,
   description: String,
   image: String,
   
   createdAt: { 
      type: Date, 
      default: Date.now
   },
   
   _author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      }
   },
   
   _comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
   
});

module.exports =  mongoose.model("Question", questionSchema);