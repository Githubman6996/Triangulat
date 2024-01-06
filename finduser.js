const User = require('../models/User');

const finduser = (req,res,next) => {
    if (req.body.username || req.body.id && typeof req.body.username === 'string' || typeof req.body.id === 'string') {
        if (req.body.id) {
                User.countDocuments({_id: req.body.id}, function (err, count){ 
                    if(count>0){
                        User.findOne({$or: [{_id:req.body.id}]})
                .then(user => {
                        res.json({
                            username: user.username,
                            tokens: user.tokens,
                            trians: user.trians,
                            pfp: user.pfp,
                            role: user.role,
                            opened: user.opened,
                            banned: user.banned,
                            id: user._id,
                            joined: user.createdAt,
                            totalposts: user.totalposts,
                            likes: user.likes,
                        })
                })
                    }
                    else {
                        res.json({
                            error: "User Doesn't Exist"
                        })
                    }
                }); 
        }
        else {
            let username = req.body.username
            let usertrim = username.trim()
            let userlower = usertrim.toLowerCase()
            User.findOne({$or: [{lowercase:userlower}]})
                .then(user => {
                    if (user) {
                        res.json({
                            username: user.username,
                            tokens: user.tokens,
                            trians: user.trians,
                            pfp: user.pfp,
                            role: user.role,
                            opened: user.opened,
                            id: user._id,
                            totalposts: user.totalposts,
                            likes: user.likes,
                        })
                    }
                    else {
                        res.json({
                            error: "User Doesn't Exist"
                        })
                    }
                })
        }
    }
    else {
        res.json({
            error: "Please Include a Username"
        })
    }
}

module.exports = {
    finduser
}