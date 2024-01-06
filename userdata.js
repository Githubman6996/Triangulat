const User = require('../models/User');
const jwt = require('jsonwebtoken')
let trianss;
async function removeIds(array) {
    for (let i = 0; i < array.length; i++) {
      delete array[i]._id;
    }
    return array;
  }
const userdata = (req,res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token,'*&^slkdfhlkh&^%ksn32``', function(err,decode){
    User.findOne({$or: [{username:decode.name}]})
            .then(user => {
              if (user) {
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
        posts: user.posts
      })
            
              }
              else {
                res.json({
                  error: "an error occurred"
                })
              }              
                
            })
        })
}

module.exports = {
    userdata
}