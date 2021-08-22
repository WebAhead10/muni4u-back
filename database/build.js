const db = require("./connect");
const fs = require("fs");
const path = require("path");
const initquerypath = path.join(__dirname, "init.sql");
const initquery = fs.readFileSync(initquerypath,{encoding : "utf-8"});

db.query(initquery).then((result)=>{console.log("Database has been build");console.log(result);}).catch((error)=>{console.log("Database faild to build"); console.log(error);})