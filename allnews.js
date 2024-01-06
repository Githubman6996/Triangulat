const news = require("../storage/news.json")
const sendnews = (req,res,next) => {
    res.json({
        news
    })
}

module.exports = {
    sendnews
}