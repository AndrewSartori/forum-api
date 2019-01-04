const express = require("express");
const router  = express.Router();
const db      = require("../models")
const helpers = require("../helpers/users");

router.route("/")
.post(helpers.createUser);

module.exports = router;