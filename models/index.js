const mongoose = require("mongoose");

mongoose.set("debug", true);

mongoose.connect("mongodb://localhost/forum-api");

mongoose.Promise = Promise;

module.exports.Question = require("./question");
module.exports.Comment = require("./comment");
module.exports.User = require("./user");