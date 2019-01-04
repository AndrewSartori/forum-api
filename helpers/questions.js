const db = require("../models");

exports.getQuestions = function(req, res){
   db.Question.find({}).populate({
            // "path" must be followed by the name of the db schema property that references a db model
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
    // If this works, give me access to the new Todo and respond back with the newly created Todo (so that I know it was created)
    .then(function(newQuestion){
        // 201 status code refers to a new resource being created
        res.status(201).json(newQuestion); 
    })
    // If there's an error, show me the error
    .catch(function(err){
        res.send(err);
    });
};


exports.getQuestionById = function(req, res){
    // Look up Todos by a specific mongoose ID
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