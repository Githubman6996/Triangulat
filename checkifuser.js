const User = require('../models/User');

const ifuser = (req,res,next) => {
    if (req.body.accesstoken === "MTA3NjUwOTM4MzcyNDM4MDI2MQ.GKUJE1.sKhwyLHt75_ZOJ9gsi8soQPGRZFj8oqtU6rjjQ") {
        if (req.body.username) {
            User.findOne({$or: [{username:req.body.username}]})
            .then(user => {
                if (user) {
                    res.json({
                        message: "yes user"
                    })
                }
                else {
                    res.json({
                        message: "no user"
                    })
                }
            })
        }
        else {
        res.json({
            message: "continue"
        })
    }
    }
    else {
        res.json({
            message: "this API is for the Triangulet Discord bot, not you"
        })
    }
}

module.exports = {
    ifuser
}