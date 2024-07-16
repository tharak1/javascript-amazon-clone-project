const express = require("express");
const { registerUser, loginUser, getUser, deleteUser } = require("../controllers/usersController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/").get(getUser).delete(deleteUser);
module.exports = router;
