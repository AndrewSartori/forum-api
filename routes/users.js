const express = require("express");
const router  = express.Router();
const db      = require("../models")
const helpers = require("../helpers/users");

// Watch the pathing since these first two routes both point to "/" while the following 3 routes all point to "/:todoId"
router.route("/")
.post(helpers.createUser);

module.exports = router;