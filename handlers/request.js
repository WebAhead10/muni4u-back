const db = require("../database/connect");

function get(req, res) {
  res.send("Request");
}

// This function insert the request's data into the requests table in db
function createReq(req, res) {
  const data = req.body;
  const values = [data.haweye, data.fullname, data.sub, data.content];
  console.log(data);

  db.query(
    "INSERT INTO requests(haweye,fullname,sub,content) VALUES($1, $2, $3, $4)",
    values
  )
    .then(() => {
      res.send({success:true});
    })

    .catch((error) => {
      console.log(error);
      res.send({success:true});
    });
}
module.exports = { get, createReq };
