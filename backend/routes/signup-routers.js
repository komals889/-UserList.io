

const express = require("express");
const { signupUser } = require("../controller/signup-controller");

const router = express.Router()
router.route("/").post(signupUser)

module.exports = router;