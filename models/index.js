const mongoose = require("mongoose");

mongoose.set("debug", true);

// Connect to database server
mongoose.connect("mongodb://localhost/forum-api");

// Allow myself to use the Promise syntax/tell mongoose I am going to use promises
mongoose.Promise = Promise;

module.exports.Question = require("./question");
module.exports.Comment = require("./comment");
module.exports.User = require("./user");