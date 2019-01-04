const express = require("express");
const router  = express.Router();
const db      = require("../models")
const helpers = require("../helpers/questions");

router.route("/")
.get(helpers.getQuestions)
.post(helpers.createQuestion);

router.route("/:questionId")
.get(helpers.getQuestionById)
.put(helpers.updateQuestion)
.delete(helpers.deleteQuestion);


module.exports = router;