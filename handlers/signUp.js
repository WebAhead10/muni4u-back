const db = require("../database/connect");
const path = require("path");

function get(req, res) { 
    // טעינת הדף מ REACT ?
    //res.send("SignUp");
    
}
// This function insert user's data into the users table in db
function createUser(req, res) { 
    const data = req.body;
    const values = [
        data.id,
        data.fullname,
        data.phone,
        data.email,
        data.user_password,
        data.home_address,
      ];
    console.log(data);
    // add if statment to check if the user exists in db
    db.query("INSERT INTO users(id,fullname,phone,email,user_password,home_address) VALUES($1, $2, $3, $4, $5, $6)", values)
    .then(() => {
        res.redirect("/home/:username")
    })

    .catch((error) => {
      console.log(error);
     res
    .status(500)
    .send(`<h1>Something went wrong saving your data</h1>`);
});

    
}
module.exports = ({get, createUser});