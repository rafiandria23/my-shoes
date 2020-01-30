var express = require('express');
var router = express.Router();
const Controller = require("../controllers/controller");

router.get("/login",Controller.loginForm);
router.post("/login",Controller.memberLogin);
router.get("/register",Controller.registerForm);
router.post("/register",Controller.registerMember);
router.get("/logout",Controller.logout);
module.exports= router