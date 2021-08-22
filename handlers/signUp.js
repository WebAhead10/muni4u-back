const db = require("../database/connect");

function get(req, res) {
  res.send("SignUp");
}

// This function insert user's data into the users table in db
function createUser(req, res) {
  const data = req.body;
  const values = [
    data.id,
    data.fullname,
    data.phone,
    data.email,
    data.address,
    data.password,
  ];
  console.log(data);
  db.query(`SELECT * FROM users WHERE id=$1`, [data.id]).then((data) => {
    if (!data.rows.length) {
      db.query(
        "INSERT INTO users(id,fullname,phone,email,address,password) VALUES($1, $2, $3, $4, $5, $6)",
        values
      )
        .then(() => {
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
