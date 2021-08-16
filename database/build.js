const db = require("./connect");
const fs = require("fs");
const path = require("path");
const initquerypath = path.join(__dirname, "init.sql");
const initquery = fs.readFileSync(initquerypath,{encoding : "utf-8"});

