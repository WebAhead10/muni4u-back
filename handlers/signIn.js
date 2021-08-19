const db = require("../database/connect");

function get(req, res) {
  res.send("SignIn");
}

function SignIn(req, res) {
  const data = req.body;

  // Checking if the id and the password is correct
  db.query(`SELECT * FROM users WHERE id=$1`, [data.id])
    .then((result) => {
      if (result.rows.length) {
        if (result.rows[0].password === data.password) {
          res.send("success");
        } else {
          res.send("Your password is wrong");
        }
      } else {
        res.send("Your ID is wrong");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
module.exports = { get, SignIn };
