const express = require("express");
const router = require("./router");
const cors = require("cors");

const app = express();
app.use(cors("cors"));
app.use(express.json());
app.use(router);

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Server listening on http://localhost:${port}`)
);
