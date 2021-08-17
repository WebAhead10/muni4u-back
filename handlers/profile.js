const db = require("../database/connect");
const path = require("path");

function get(req, res) {//taking data
    console.log(Hiii);
}
function set(req, res) {
    const data = req.body;
    console.log(data);

    
}
module.exports = ({get, set});