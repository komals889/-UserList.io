const express = require("express")
const { getAllUserData } = require("../controller/admin-controller")

const router = express.Router()

router.route("/admin").get(getAllUserData)

module.exports = router;