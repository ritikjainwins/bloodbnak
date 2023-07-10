const express = require("express");
const router = express.Router();
const Registration = require("../controllers/userSignUp")

router.route("/").post(Registration.newUserRegistration);
router.route("/update").patch(Registration.updateUserDetails);
router.route("/bloodbank").post(Registration.bloodBankRegistration);


module.exports = router;