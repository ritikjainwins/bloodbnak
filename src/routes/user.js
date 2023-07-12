const express = require("express");
const router = express.Router();
const Registration = require("../controllers/usercontroller")

//users table
router.route("/user").post(Registration.newUserRegistration);
router.route("/user/update").patch(Registration.updateUserDetails);
router.route("/user/getall").get(Registration.getAllUsers);
router.route("/user/getall/:id").get(Registration.getByIdUsers);
router.route("/user/delete/:id").delete(Registration.deleteUsers);


//blood_bank table
router.route("/bloodbank").post(Registration.bloodBankRegistration);
router.route("/bloodbank/getall").get(Registration.getAllBloodBank);
router.route("/bloodbank/update").patch(Registration.updateBloodBankDetails);
router.route("/bloodbank/delete/:id").delete(Registration.deleteBloodbank);
router.route("/bloodbank/getall/:id").get(Registration.getByIdBloodBank);


module.exports = router;