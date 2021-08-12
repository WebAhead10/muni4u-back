const express = require("express");
const router = express.Router();
const signUp = require("./handlers/signUp");
const signIn = require("./handlers/signIn");


router.get("/", (req, res) => {
    res.send("Hi Adan");
});
router.get("/signIn", signIn.get);
router.get("/signUp", signUp.get);

module.exports = (router);