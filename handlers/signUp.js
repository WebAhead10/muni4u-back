const db = require("../database/connect");
// const path = require("path");

function get(req, res) {
  // טעינת הדף מ REACT ?
  res.send("SignUp");
}

// This function insert user's data into the users table in db
function createUser(req, res) {
  console.log("Hi");
  const data = req.body;
  const values = [
    data.fullname,
    data.haweye,
    data.phone,
    data.email,
    data.address,
    data.pass1,
    data.pass2,
  ];
  console.log(data);
  // add if statment to check if the user exists in db
  db.query(
    "INSERT INTO users(fullname,haweye,phone,email,address,pass1,pass2) VALUES($1, $2, $3, $4, $5, $6, $7)",
    values
  )
    .then(() => {
      res.status(201).send("Regestiration is done!");
    })

    .catch((error) => {
      console.log(error);
    });
}
module.exports = { get, createUser };
