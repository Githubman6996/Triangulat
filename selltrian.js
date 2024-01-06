const User = require('../models/User');
const jwt = require('jsonwebtoken')
const ValuesnCapsules = require('./opencapsule').ValuesnCapsules
const selltrian = (req,res,next) => {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token,'*&^slkdfhlkh&^%ksn32``', function(err,decode){
        User.findOne({$or: [{username:decode.name}]})
                .then(user => {
                    if (user) {
                    if(req.body.trian && typeof req.body.trian === 'string' && typeof req.body.quantity === 'number' && req.body.quantity >= 0 && Number.isInteger(req.body.quantity) === true) {
                        if(ValuesnCapsules.find(capsules => capsules.trians.find(trian => trian.name === req.body.trian))) {
                        if (user.trians.find(o => o.trian === req.body.trian)) {
                            if (user.trians.find(o => o.trian === req.body.trian).quantity < req.body.quantity) {
                                res.json({
                                    message:"you dont have enough of that trian"
                                })
                            }
                            else {
                                if (user.trians.find(o => o.trian === req.body.trian).quantity - req.body.quantity === 0) {
                                    User.findOneAndUpdate({username:decode.name}, 
                                        {
                                           $pull:{
                                            trians: {"trian":req.body.trian,"quantity":req.body.quantity}
                                           }
                                        }).then(err=>{return;}) 
                                        totaltokens = ValuesnCapsules.find(capsules => capsules.trians.find(trian => trian.name === req.body.trian)).trians.find(o=>o.name===req.body.trian).sell * req.body.quantity
                                        newtokens = user.tokens + totaltokens
                                        User.findOneAndUpdate({username:decode.name},
                                            {
                                               $set:{
                                                tokens: newtokens
                                               }
                                            }).then(err=>{return;})
                                            res.json({
                                                message: `sold ${req.body.quantity} ${req.body.trian}(s)`
                                            })
                                }
                                else {
                                    let triarray = user.trians
        triarray.indexOfObject = function (property, value) {
            for (let i = 0, len = this.length; i < len; i++) {
              if (this[i][property] === value) return i;
            }
            return -1;
          }
                                    User.findOneAndUpdate({username:decode.name}, 
                                        {
                                           $set:{
                                            [`trians.${triarray.indexOfObject("trian",`${req.body.trian}`)}.quantity`]: user.trians.find(o => o.trian == req.body.trian).quantity - req.body.quantity
                                           }
                                        }).then(err=>{return;})
                                        totaltokens = ValuesnCapsules.find(capsules => capsules.trians.find(trian => trian.name === req.body.trian)).trians.find(o=>o.name===req.body.trian).sell * req.body.quantity
                                        newtokens = user.tokens + totaltokens
                                        User.findOneAndUpdate({username:decode.name},
                                            {
                                               $set:{
                                                tokens: newtokens
                                               }
                                            }).then(err=>{return;})
                                            res.json({
                                                message: `sold ${req.body.quantity} ${req.body.trian}(s)`
                                            })
                                }
                            }
                        }
                        else {
                            res.json({
                                message: "You dont have that trian!"
                            })
                        }
                    }
                    else {
                        res.json({
                            message: "that trian doesnt exist"
                        })
                    }
                    }
                    else {
                        res.json({
                            message: "please include a trian and a quantity"
                        })
                    }
                }
                else {
                    res.json({
                        error: "an error occured"
                    })
                }
                })
    })
}

module.exports = {
    selltrian
}