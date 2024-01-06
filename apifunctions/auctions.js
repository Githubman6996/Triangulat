const auctions = require("../storage/auctions.json")
const sendauctions = (req,res,next) => {
    res.json({
        auctions
    })
}

module.exports = {
    sendauctions
}