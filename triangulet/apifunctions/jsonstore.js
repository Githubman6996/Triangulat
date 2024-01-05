const jwt = require('jsonwebtoken')
const posts = require('../storage/posts.json')
const User = require("../models/User")
const fs = require("fs")
const wash = require('washyourmouthoutwithsoap');
const cuid = require("cuid");
const { title } = require('process');
const storedata = (req,res,next) => {
    const token = req.headers.authorization.split(' ')[1]
    if (req.body.title && typeof req.body.title === 'string') {
        if (req.body.body && typeof req.body.body === 'string') {
            if (req.body.body.includes('<') || req.body.body.includes('>')  || req.body.title.includes('<')  || req.body.title.includes('>')) {
                res.json({
                    message: "title/bodt can not include HTML tags"
                })
    }
    else {

        jwt.verify(token,'*&^slkdfhlkh&^%ksn32``', function(err,decode){
            if(err){
                res.status(400).json({
                    err
                })
            }
            else {
                if (req.body.title.length > 40) {
                    res.json({
                        message: "max of 50 chars for the title"
                    })

                }
                else {
                    if (req.body.body.length > 500) {
                        res.json({
                            message: "max of 500 chars for the body"
                        })
                    }
                    else {
                        if (wash.check('en', req.body.title) === false && wash.check('en', req.body.body) === false) {
                            User.findOne({$or: [{username:req.user.name}]})
            .then(user => {
                if (user) {
                    if (user.posts > 1) {
                        res.json({
                            message: "You have exceeded your daily limit of 2 posts."
                        })
                    }
                    else {
                        if (user.posts == 0) {
                            User.findOneAndUpdate({
                                username:req.user.name
                            }, {
                                $set: {
                                    posts: 1
                                }
                            }).then(err => {
                                return;
                            })
                        } else {
                            User.findOneAndUpdate({
                                username:req.user.name
                            }, {
                                $set: {
                                    posts: user.posts + 1
                                }
                            }).then(err => {
                                return;
                            })
                        }
                        if (user.totalposts == 0) {
                            User.findOneAndUpdate({
                                username:req.user.name
                            }, {
                                $set: {
                                    totalposts: 1
                                }
                            }).then(err => {
                                return;
                            })
                        } else {
                            User.findOneAndUpdate({
                                username:req.user.name
                            }, {
                                $set: {
                                    totalposts: user.totalposts + 1
                                }
                            }).then(err => {
                                return;
                            })
                        }
                        let postid = cuid()
                        posts[postid] = {
                            "title": req.body.title,
                            "body": req.body.body,
                            "user": user._id,
                            "likes": []
                        }
                        fs.writeFileSync('./storage/posts.json', JSON.stringify(posts))
                        res.json({
                            message: 'post added',
                            id: postid
                        })
                    }
                }
                else {
res.json({
    message: "an error occurred"
})
                }
            })
                        }
                        else {
                            res.json({
                                message: "Inappropriate Title/Body"
                            })
                        }
                    }
                }
          
        }
        })
    }
    }
    else {
        res.json({
            message: "missing body"
        })
    }
    }
    else {
        res.json({
            message: 'missing title'
        })
    }
}

module.exports = {
    storedata
}