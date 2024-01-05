const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = (req,res,next) => {
    if(req.body.username && req.body.password && req.body.accesskey) {
        let username = req.body.username
        let usertrim = username.trim()
        let userlower = usertrim.toLowerCase()
        let accesskey = req.body.accesskey
        try {
            const decode = jwt.verify(accesskey, 'kshfdosidh*&@#(98asdlkajsd')
        if (decode.name === req.body.username) {
            User.findOne({$or: [{lowercase:userlower}]})
            .then(user => {
                if(user) {
                    res.json({
                        message: "User Already Exists"
                    })
                }
                else {
                    if (req.body.password.length < 6) {
                        res.json({
                            message: "Password Must be 6 Chars or Longer"
                        })
                    }
                    else {
                        if (req.body.username.length > 16) {
                            res.json({
                                message:"Username Must be Less Than 16 Chars"
                            })
                        }
                        else if (req.body.username.length < 3){
                            res.json({
                                message:"Username Must be at Least 3 Char Long"
                            })
                        }
                        else {
                            bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
                                if (err) {
                                    res.json({
                                        error:err
                                    })
                                }
                                
                        
                                let user = new User ({
                                    username: req.body.username,
                                    password: hashedPass,
                                    tokens: 3000000,
                                    trians: [],
                                    pfp: '/media/misc/favicon.png',
                                    lowercase: userlower,
                                    banned: false,
                                    reason: '',
                                    banby: '',
                                    opened: 0,
                                    role: 'Normal',
                                    posts: 0,
                                    totalposts: 0,
                                    likes: 0,
                                })
                                user.save()
                                .then(user => {
                                    let token = jwt.sign({name:user.username}, '*&^slkdfhlkh&^%ksn32``', {expiresIn: '1h'})
                    res.json({
                        message: 'User Added Successfully',
                        tokenraw: `triangulet ${token}`,
                        token: token
                    })
                                })
                                .catch(error =>{
                                    res.json({
                                        message: 'An error occured'
                                    })
                                })
                            })
                        }
                    }
                }
            })
        }
        else {
            res.json({
                message: "Please get a accesskey from our Discord\nif you did, it either expired or something went wrong: contact staff"
            })
        }
    }
    catch(error) {
        res.json({
            message: "Please get a accesskey from our Discord\nif you did, it either expired or something went wrong: contact staff"
        })
    }
        }
        else {
            res.json({
                message: "Fill Out All Fields"
            })
        }
    
}

const login = (req,res,next) => {
    let username = req.body.username
    let password = req.body.password
    let usertrim = username.trim()
    let userlower = usertrim.toLowerCase()
    User.findOne({$or: [{lowercase:userlower}]})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, function(err, result ){
                if (err) {
                    res.json({
                        error: err
                    })
                }
                else {
                    if (result) {
                        if (user.banned !== true) {
                        let token = jwt.sign({name:user.username}, '*&^slkdfhlkh&^%ksn32``', {expiresIn: '1h'})
                        res.json({
                            message: 'login Successful',
                            tokenraw: `triangulet ${token}`,
                            token: token
                        })
                    }
                    else {
                        res.json({
                            message: `Banned By: ${user.banby}. Reason: ${user.reason}`
                        })
                    }
                    }else {
                        res.json({
                            message: "Incorrect Password"
                        })
                    }
                }
            
            })
        }
        else {
            res.json({
                message: "No User Found"
            })
        }
    })
}

module.exports = {
    register, login
}