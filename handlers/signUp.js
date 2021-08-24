const db = require("../database/connect");

function get(req, res) {
  res.send("SignUp");
}

// This function insert user's data into the users table in db
function createUser(req, res) {
  const data = req.body;
  const values = [
    data.haweye,
    data.fullname,
    data.phone,
    data.email,
    data.address,
    data.pass1,
    data.pass2
  ];
  console.log(data);
  db.query(`SELECT * FROM users WHERE id=$1`, [data.id]).then((data) => {
    if (!data.rows.length) {
      db.query(
        "INSERT INTO users(haweya,fullname,phone,email,address,password,pass2) VALUES($1, $2, $3, $4, $5, $6, $7)",
        values
      )
        .then((result) => {
          res.send({success:true});
        })

        .catch((error) => {
          console.log(error);
        });
    } else {
      res.send({success:false});
    }
  });
}
module.exports = { get, createUser };
