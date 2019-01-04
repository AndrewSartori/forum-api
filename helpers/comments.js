const db = require("../models");

exports.getComments = function(req, res){
   db.Comment.find({}).populate({
        path: "_author",
        select: "username createdAt -_id"
    }).then(function(comments){
       res.json(comments);
   })
   .catch(function(err){
       res.send(err);
   });
};


exports.createComment = function(req, res){
    const text   = req.body.text;
    const userId = req.body.userId;
    const postId = req.body.postId;
    
    const comment = new db.Comment({
        text: text,
        _author: userId,
        _post: postId
    });
    
    
    comment.save().then(function(newComment){
        db.Question.findByIdAndUpdate(
            postId,
            { $push: {"_comments": newComment._id} }
        ).then(function(existingPost){
            res.status(200).json({
                success: true,
                data: newComment,
                existingPost
            });
        }).catch(function(err){
            res.status(500).json({
                message: err.toString(),
            });
        });
    }).catch(function(err){
        res.status(500).json({
            message: err.toString(),
        });
    });
};


exports.getCommentById = function(req, res){
    db.Comment.findById(req.params.commentId)
    .then(function(foundComment){
        res.json(foundComment);
    })
    .catch(function(err){
        res.send(err);
    });
};


exports.updateComment = function(req, res){
   db.Comment.findOneAndUpdate({_id: req.params.commentId}, req.body, {new: true})
   .then(function(comment){
       res.json(comment);
   })
   .catch(function(err){
       res.send(err);
   });
};


exports.deleteComment = function(req, res){
    db.Comment.remove({_id: req.params.commentId})
    .then(function(){
        res.json({message: "We deleted it!"});
    })
    .catch(function(err){
        res.send(err);
    });
};


module.exports = exports;