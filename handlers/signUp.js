const db = require("../database/connect");

function get(req, res) {
  res.send("SignUp");
}

// This function insert user's data into the users table in db
function createUser(req, res) {
  console.log("Hi");
  const data = req.body;
  const values = [
    data.id,
    data.fullname,
    data.phone,
    data.email,
    data.address,
    data.pass1,
  ];
  console.log(data);
  // Checking if the user is already exist
  db.query(`SELECT * FROM users WHERE id=$1`, [data.id]).then((data) => {
    if (!data.rows.length) {
      db.query(
        "INSERT INTO users(id,fullname,phone,email,address,pass1) VALUES($1, $2, $3, $4, $5, $6)",
        values
      )
        .then(() => {
          res.status(201).send("Regestiration is done!");
        })

        .catch((error) => {
          console.log(error);
        });
    } else {
      res.send("You have been rejestered before, try to log in instaed");
    }
  });
}
module.exports = { get, createUser };
