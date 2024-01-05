const User = require('../models/User');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
let id;
const setpassword = (req,res,next) => {
    if (req.body.newpass && req.body.password && typeof req.body.newpass === 'string' && typeof req.body.password === 'string') {
        let newusername = req.user.name
        let usertrim = newusername.trim()
        let userlower = usertrim.toLowerCase()
        User.findOne({$or: [{lowercase:userlower}]})
            .then(user => {
                if (user) {
                    bcrypt.compare(req.body.password, user.password, function(err, result ){
                        if (err) {
                            res.json({
                                error: err
                            })
                        }
                        else {
                            if (result) {
                                if (req.body.password == req.body.newpass) {
                                    res.json({
                                        error: "Thats already your password"
                                    })
                                }
                                else {
                                bcrypt.hash(req.body.newpass, 10, function(err, hashedPass) {
                                    if (err) {
                                        res.json({
                                            error:err
                                        })
                                    }
                                    else {
                                        if (req.body.newpass.length < 6) {
                                            res.json({
                                                error: "Password Must be 6 Chars or Longer"
                                            })
                                        }
                                        else {
                                        User.findOneAndUpdate({
                                            username: req.user.name
                                        }, {
                                            $set: {
                                                password: `${hashedPass}`
                                            }
                                        }).then(err => {
                                        })
                                        res.json({
                                            message: "Password Set!",
                                        })
                                    }
                                    }
                                })
                            }
                                }
                            else {
                                res.json({
                                    error: "Incorrect Password"
                                })
                            }
                        }
                    })
                }
                else {
                    res.json({
                        error: "An error occurred. Try again."
                    })
                }
            })
    }
    else {
        res.json({
            error: "Please include a new password and a password"
        })
    }

}

module.exports = {
    setpassword
}