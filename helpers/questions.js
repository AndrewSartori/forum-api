const db = require("../models");

exports.getQuestions = function(req, res){
   db.Question.find({}).populate({
            path: "_author",
            select: "username createdAt -_id"
        }).populate({
            path: "_comments",
            select: "text createdAt _author",
            match: { "isDeleted": false }
    }).then(function(questions){
       res.json(questions);
   }).catch(function(err){
       res.send(err);
   });
};


exports.createQuestion = function(req, res){
    db.Question.create(req.body)
    .then(function(newQuestion){
        res.status(201).json(newQuestion); 
    })
    .catch(function(err){
        res.send(err);
    });
};


exports.getQuestionById = function(req, res){
    db.Question.findById(req.params.questionId)
    .then(function(foundQuestion){
        res.json(foundQuestion);
    })
    .catch(function(err){
        res.send(err);
    });
};


exports.updateQuestion = function(req, res){
   db.Question.findOneAndUpdate({_id: req.params.questionId}, req.body, {new: true})
   .then(function(question){
       res.json(question);
   })
   .catch(function(err){
       res.send(err);
   });
};


exports.deleteQuestion = function(req, res){
    db.Question.remove({_id: req.params.questionId})
    .then(function(){
        res.json({message: "We deleted it!"});
    })
    .catch(function(err){
        res.send(err);
    });
};


module.exports = exports;