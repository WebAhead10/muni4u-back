function get(req, res) {
    res.send("Request");
    
}
function set(req, res) {

    const data = req.body;
    console.log(data);
}
module.exports = ({get, set});