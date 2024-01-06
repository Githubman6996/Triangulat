const posts = require('../storage/posts.json')
const fs = require("fs");
const User = require('../models/User');

const likepost = (req,res,next) => {
    if (req.body.postid && typeof req.body.postid === 'string') {
        postid = req.body.postid
        if (posts[postid]) {
            User.findOne({$or: [{username:req.user.name}]})
            .then(user => {
                if (user) {
                    if (posts[postid].likes.includes(String(user._id))) {
                        const indexToRemove = posts[postid].likes.indexOf(String(user._id));
                        if (indexToRemove !== -1) {
                            posts[postid].likes.splice(indexToRemove, 1);
                        }
                        fs.writeFileSync('./storage/posts.json', JSON.stringify(posts));
                        res.json({
                            message: "like removed"
                        })
                        User.findOne({$or: [{_id: posts[postid].user}]})
                        .then(user => {
                                User.findOneAndUpdate({
                                    username: user.username
                                }, {
                                    $set: {
                                        likes: user.likes - 1
                                    }
                                }).then(err => {
                                    return;
                                })
                        })
                    }
                    else {
                        posts[postid].likes.push(String(user._id))
                        fs.writeFileSync('./storage/posts.json', JSON.stringify(posts))
                        res.json({
                            message: "like added"
                        })
                        User.findOne({$or: [{_id: posts[postid].user}]})
                        .then(user => {
                            if (user.likes === 0) {
                                User.findOneAndUpdate({
                                    username: user.username
                                }, {
                                    $set: {
                                        likes: 1
                                    }
                                }).then(err => {
                                    return;
                                })
                            } else {
                                User.findOneAndUpdate({
                                    username: user.username
                                }, {
                                    $set: {
                                        likes: user.likes + 1
                                    }
                                }).then(err => {
                                    return;
                                })
                            }
                        })
                    }
                }
                else {
                    res.json({
                        error: "an error occurred"
                    })
                }
            })
        }
        else {
            res.json({
                message: "that post does not exist"
            })
        }
    }
    else {
        res.json({
            message: "please include a post id"
        })
    }
}

module.exports = {
    likepost
}