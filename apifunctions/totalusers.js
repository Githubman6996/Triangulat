const User = require('../models/User');

const totaluser = (req,res,next) => {
    if (req.body.accesstoken === "MTA3NjUwOTM4MzcyNDM4MDI2MQ.GKUJE1.sKhwyLHt75_ZOJ9gsi8soQPGRZFj8oqtU6rjjQ" && typeof req.body.accesstoken === 'string') {
        User.count({}, function(err,count) {
            res.json({
                message: count
            })
        })
    }
    else {
        res.json({
            message: "this API is for the Triangulet Discord bot, not you"
        })
    }
}

module.exports = {
    totaluser
}