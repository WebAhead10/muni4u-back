const express = require("express");
const router = require("./router");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 4000;
app.use(express.json());
app.use(router);
app.use(cors("cors"));
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));