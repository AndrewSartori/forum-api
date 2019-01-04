const db = require("../models");

exports.createUser = function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const user = new db.User({
        username,
        password
    });
    
    user.save().then(function(newUser){
        res.status(201).json(newUser); 
    }).catch((err) => {
        res.status(500).json({
            message: err
        });
    });
};


module.exports = exports;