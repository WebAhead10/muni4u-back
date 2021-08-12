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
router.get("/signUp", signUp.get);
router.get("/request", request.get);
router.get("/profile", profile.get);

module.exports = (router);