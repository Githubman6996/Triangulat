const User = require('../models/User');
const jwt = require('jsonwebtoken')
const CheckLogin = (req,res,next) => {
    if (req.body.token) {
        jwt.verify(req.body.token,'*&^slkdfhlkh&^%ksn32``', function(err,decode){
            if(err){
                res.status(400).json({
                    message: "not logged in"
                })
            }
            else {
                User.findOne({$or: [{username:decode.name}]})
            .then(user => {
                if (user) {
                    res.json({
                        message:"logged in"
                    })
                }
                else {
                    res.json({
                        message: "invalid token"
                    })
                }
         })
            }
        })
    }
    else {
        res.json({
            message: "no token"
        })
    }
}
module.exports = {
    CheckLogin
}