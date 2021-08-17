const express = require("express");
const router = require("./router");
const cors = require("cors");

const app = express();
app.use(cors("cors"));

const port = process.env.PORT || 4000;
app.use(express.json());
app.use(router);
app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
