const posts = require("../storage/posts.json")
const sendposts = (req,res,next) => {
    res.json({
        posts
    })
}

module.exports = {
    sendposts
}