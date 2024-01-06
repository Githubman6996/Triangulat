const User = require("../models/User")
const ValuesnCapsules = require("./opencapsule").ValuesnCapsules
const setpfp = (req,res,next) => {
    if (req.body.trian && typeof req.body.trian === 'string') {
        User.findOne({
            $or: [{
                username: req.user.name
            }]
        })
        .then(user => {
            if(ValuesnCapsules.find(capsules => capsules.trians.find(trian => trian.name === req.body.trian))) { 
            if (user.trians.find(o => o.trian === req.body.trian)) {
                capsule = ValuesnCapsules.find(array => {
                    return array.trians.find(trian => trian.name === req.body.trian);
                  })
                User.findOneAndUpdate({username:req.user.name}, 
                    {
                       $set:{
                        pfp: `/media/capsules/${capsule.name}/trians/${req.body.trian}.png`
                       }
                    }).then(err=>{return;}) 
                    res.json({
                        message: "pfp set"
                    })
            }
            else {
                res.json({
                    message: "you dont have that trian"
                })
            }
        }
        else {
            res.json({
                message: "that trian doesnt exist"
            })
        }
        })
    }
    else {
        res.json({
            message: "please include a trian"
        })
    }
}

module.exports = {
    setpfp
}