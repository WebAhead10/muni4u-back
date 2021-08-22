const express = require("express");
const router = require("./router");
const app = express();
const cors = require("cors");
const mailer = require("nodemailer");
const cookie = require("cookie-parser");
const jwt = require("jsonwebtoken");

app.use(cors("cors"));
app.use(express.json());
// app.use("jwt");
app.use(express.urlencoded({extended: false}))
app.use(router);

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
