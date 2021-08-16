function get(req, res) {
    console.log(Hiii);
}
function set(req, res) {
    const data = req.body;
    console.log(data);
    
}
module.exports = ({get, set});