const db = require("../database/connect");

function get(req, res) {
  res.send("SignIn");
}

function SignIn(req, res) {
  const data = req.body;
  // must be check if requst from my front-end
  console.log(req.get("host"));
  db.query(`SELECT * FROM users WHERE haweya=$1`, [data.haweye])
    .then((result) => {
      if (result.rows.length) {
        if (result.rows[0].password === data.pass1) {
          res.send({success:true, data:result.rows});
        } else {
          res.send({success:false});
        }
      } else {
        res.send({success:false});
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
module.exports = { get, SignIn };
