const express = require("express");
const router = express.Router();
const signUp = require("./handlers/signUp");
const signIn = require("./handlers/signIn");
const request = require("./handlers/request");
const profile = require("./handlers/profile");

router.get("/", (req, res) => {
  res.send("Hi Adan");
});
router.get("/signIn", signIn.get);
router.post("/signIn", signIn.SignIn);

router.get("/signUp", signUp.get);
router.post("/signUp", signUp.createUser);

router.get("/request", request.get);
router.post("/request", request.createReq);

router.get("/profile", profile.get);
router.post("/profile", profile.set);

module.exports = router;
