const db = require("../database/connect");
const path = require("path");
//we have to use the path
function get(req, res) { 
    // טעינת הדף מ REACT ?
    //res.send("Request");
    
}
// This function insert the request's data into the requests table in db
function createReq(req, res) { 
    const data = req.body;
    const values = [
        data.id_req,
        data.id_user,
        data.fullname,
        data.req_subject,
        data.req_content,
      ];
    console.log(data);
    // add if statment to check if the user exists in db
    db.query("INSERT INTO requests(id_req,id_user,fullname,req_subject,req_content) VALUES($1, $2, $3, $4, $5)", values)
    .then(() => {
        res.redirect("/lastPage")
    })

    .catch((error) => {
      console.log(error);
     res
    .status(500)
    .send(`<h1>Something went wrong saving your request</h1>`);
});

    
}
module.exports = ({get, createReq});