const express = require("express");
const router  = express.Router();
const db      = require("../models")
const helpers = require("../helpers/questions");

// Watch the pathing since these first two routes both point to "/" while the following 3 routes all point to "/:todoId"
router.route("/")
.get(helpers.getQuestions)
.post(helpers.createQuestion);

router.route("/:questionId")
.get(helpers.getQuestionById)
.put(helpers.updateQuestion)
.delete(helpers.deleteQuestion);


module.exports = router;