function get(req, res) {
    res.send("Profile");
    
}
function set(req, res) {
    const data = req.body;
    console.log(data);
    
}
module.exports = ({get, set});