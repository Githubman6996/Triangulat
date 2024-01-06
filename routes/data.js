const express = require('express')
const router = express.Router()
const userdata = require("../apifunctions/userdata")
const allposts = require('../apifunctions/allposts')
//const auctions = require('../apifunctions/auctions')
const allnews = require('../apifunctions/allnews')
const sendtrians = require('../apifunctions/gettrians')
const authenticate = require('../middleware/authenticate')
const rateLimit = require('express-rate-limit')
const limiter = rateLimit({
    max: 1,
    windowMs: 1000,
    message: JSON.stringify({"error":"Rate Limit"})
})
router.get('/user', authenticate, userdata.userdata)
router.get('/allposts', allposts.sendposts)
router.get('/news', allnews.sendnews)
router.get('/trians', sendtrians.sendTrians)
//router.get('/auctions',auctions.sendauctions)
module.exports = router