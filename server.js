const express = require("express");
const router = require("./router");
const app = express();
const cors = require("cors");
const mailer = require("nodemailer");
const cookie = require("cookie-parser");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 4000;

// app.use(cors("cors"));
app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.options(
  '*',
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(express.json());
// app.use("jwt");
app.use(express.urlencoded({extended: false}))
app.use(router);


app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
