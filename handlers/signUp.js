function get(req, res) { //taking data
    res.send("SignUp");
    
}

function set(req, res) {
    const data = req.body;
    console.log(data);
    
}
module.exports = ({get, set});