const express = require("express");
const router = express.Router();
const Registration = require("./user");

router.use("/singin",Registration);

module.exports = router;