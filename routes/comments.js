const express = require("express");
const router  = express.Router();
const db      = require("../models")
const helpers = require("../helpers/comments");

router.route("/")
.get(helpers.getComments)
.post(helpers.createComment);

router.route("/:questionId")
.get(helpers.getCommentById)
.put(helpers.updateComment)
.delete(helpers.deleteComment);


module.exports = router;