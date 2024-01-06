const User = require('../models/User');
//const auctions = require('../storage/auctions.json')
const ValuesnCapsules = require('./opencapsule').ValuesnCapsules
const fs = require("fs")
const cuid = require("cuid");
let theauction;
let samebid;
let idkauctions
const addauction = (req,res,next) => {
    if (req.body.trian && req.body.startbid && req.body.amount) {
        if (typeof req.body.amount === 'number' && req.body.amount >= 0 && Number.isInteger(req.body.amount) === true && typeof req.body.startbid === 'number' && req.body.startbid >= 0 && Number.isInteger(req.body.startbid) === true) {

        if(ValuesnCapsules.find(capsules => capsules.trians.find(trian => trian.name === req.body.trian))) {
            User.findOne({
                $or: [{
                    username: req.user.name
                }]
            })
            .then(user => {
                if (user.trians.find(o => o.trian === req.body.trian)) {
                    if (user.trians.find(o => o.trian === req.body.trian).quantity > req.body.amount || user.trians.find(o => o.trian === req.body.trian).quantity - req.body.amount === 0) { 
                        if (req.body.startbid < 9999999 || req.body.startbid === 9999999) { 
                        if (req.body.payout) {
                            if (typeof req.body.payout === 'number' && req.body.payout >= 0 && Number.isInteger(req.body.payout) === true) {
                                if (req.body.payout > req.body.startbid) {
                                    if (user.trians.find(o => o.trian === req.body.trian).quantity - req.body.amount === 0) {
                                        User.findOneAndUpdate({username:req.user.name}, 
                                            {
                                               $pull:{
                                                trians: {"trian":req.body.trian,"quantity":Number(user.trians.find(o => o.trian === req.body.trian).quantity)}
                                               }
                                            }).then(err=>{return;}) 
                                    }
                                    else {
                                        let triarray = user.trians
                triarray.indexOfObject = function (property, value) {
                for (let i = 0, len = this.length; i < len; i++) {
                  if (this[i][property] === value) return i;
                }
                return -1;
                }
                                        User.findOneAndUpdate({username:req.user.name}, 
                                            {
                                               $set:{
                                                [`trians.${triarray.indexOfObject("trian",`${req.body.trian}`)}.quantity`]: user.trians.find(o => o.trian == req.body.trian).quantity - req.body.amount
                                               }
                                            }).then(err=>{return;})
                                    }
                                    let auctionid = cuid()
                                    auctions[auctionid] = {
                                        "user": req.user.name,
                                        "trian": req.body.trian,
                                        "startingbid": req.body.startbid,
                                        "amount": req.body.amount,
                                        "payout": req.body.payout,
                                        "bids": []
                                    }
                                    fs.writeFileSync('./storage/auctions.json', JSON.stringify(auctions))
                                    res.json({
                                        message: "Auction added"
                                    })
                                }
                                else {
                                    res.json({
                                        message: "payout needs to be more that the starting bid"
                                    })
                                }
                            }
                            else {
                                res.json({
                                    message: "payout is not a number"
                                })
                            }
                        }
                        else {
                        if (user.trians.find(o => o.trian === req.body.trian).quantity - req.body.amount === 0) {
                            User.findOneAndUpdate({username:req.user.name}, 
                                {
                                   $pull:{
                                    trians: {"trian":req.body.trian,"quantity":Number(user.trians.find(o => o.trian === req.body.trian).quantity)}
                                   }
                                }).then(err=>{return;}) 
                        }
                        else {
                            
                            let triarray = user.trians
    triarray.indexOfObject = function (property, value) {
    for (let i = 0, len = this.length; i < len; i++) {
      if (this[i][property] === value) return i;
    }
    return -1;
    }
                            User.findOneAndUpdate({username:req.user.name}, 
                                {
                                   $set:{
                                    [`trians.${triarray.indexOfObject("trian",`${req.body.trian}`)}.quantity`]: Number(user.trians.find(o => o.trian === req.body.trian).quantity) - Number(req.body.amount)
                                   }
                                }).then(err=>{return;})
                        }
                        let auctionid = cuid()
                        auctions[auctionid] = {
                            "user": req.user.name,
                            "trian": req.body.trian,
                            "startingbid": req.body.startbid,
                            "amount": req.body.amount,
                            "bids": []
                        }
                        fs.writeFileSync('./storage/auctions.json', JSON.stringify(auctions))
                        res.json({
                            message: "Auction added"
                        })
                    
                }
            }
            else {
                res.json({
                    message: "startingbid is to large"
                })
            }
                    }
                    else {
                        res.json({
                            message: "you dont have enough of that trian"
                        })
                    }
                 }
                 else {
                    res.json({
                        message: "you dont have that trian"
                    })
                 }
            })
            
        }
        
        else {
            res.json({
                message: "that trian does not exist"
            })
        }
    }
    else {
        res.json({
            message: "amount/starting bid is not a number"
        })
    }
    }
    else {
        res.json({
            message: "please include a starting bid and a trian"
        })
    }
}

const bid = (req,res,next) => {
    if (req.body.bid && req.body.auction) {
        if (Number(req.body.bid)) {
            if (typeof req.body.bid === 'number' && req.body.bid >= 0 && Number.isInteger(req.body.bid) === true) {
                User.findOne({
                    $or: [{
                        username: req.user.name
                    }]
                })
                .then(user => {
                    total = user.tokens - req.body.bid
                    if (total > 0 || total === 0) {
                        if (auctions[req.body.auction]) {
                            if (auctions[req.body.auction].user === req.user.name) {
                                res.json({
                                    message: "cant bid on your own auction"
                                })
                            }
                            else {
                                if (auctions[req.body.auction].startingbid < req.body.bid || auctions[req.body.auction].startingbid - req.body.bid === 0) {
                                    samebid = false
                                        for (const bidObj of auctions[req.body.auction].bids) {
                                          if (bidObj.bid == req.body.bid) {
                                            samebid = true
                                          }
                                          else {
                                            samebid = false
                                          }
                                        }
                                      
                                      setTimeout(function(){
                                        if (samebid == false) {
                                            if (auctions[req.body.auction].payout) {
                                            
                                            
                                                if (req.body.bid > auctions[req.body.auction].payout || req.body.bid === auctions[req.body.auction].payout) {
                                                    theauction = auctions[req.body.auction]
                                                    idkauctions = auctions
                                                    User.findOneAndUpdate({username:req.user.name},
                                                        {
                                                           $set:{
                                                            tokens: user.tokens - auctions[req.body.auction].payout
                                                           }
                                                        }).then(err=>{
                                                            User.findOne({
                                                                $or: [{
                                                                    username: auctions[req.body.auction].user
                                                                }]
                                                            })
                                                            .then((userr) => {
                                                                
                                                                let newtokenss = userr.tokens + theauction.payout
                                                                User.findOneAndUpdate({username:userr.username},
                                                                    {
                                                                       $set:{
                                                                        tokens: newtokenss
                                                                       }
                                                                    }).then(err=>{})
                                                            })
                                                            if (user.trians.find(o => o.trian === theauction.trian)) {
                                                                let triarray = user.trians
                                                                triarray.indexOfObject = function(property, value) {
                                                                    for (let i = 0, len = this.length; i < len; i++) {
                                                                        if (this[i][property] === value) return i;
                                                                    }
                                                                    return -1;
                                                                }
                                                                User.findOneAndUpdate({
                                                                    username: req.user.name
                                                                }, {
                                                                    $set: {
                                                                        [`trians.${triarray.indexOfObject("trian",`${theauction.trian}`)}.quantity`]: user.trians.find(o => o.trian == theauction.trian).quantity + theauction.amount
                                                                    }
                                                                }).then(err => {
                                                                    delete idkauctions[req.body.auction]
                                                            fs.writeFileSync('./storage/auctions.json', JSON.stringify(auctions))
                                                                })
                                                                res.json({
                                                                    message: "Boughtout"
                                                                });
                                                            
                                                            } else {
                                                                User.findOneAndUpdate({
                                                                    username: req.user.name
                                                                }, {
                                                                    $push: {
                                                                        trians: {
                                                                            "trian": theauction.trian,
                                                                            "quantity": theauction.amount
                                                                        }
                                                                    }
                                                                }).then(err => {
                                                                    delete idkauctions[req.body.auction]
                                                            fs.writeFileSync('./storage/auctions.json', JSON.stringify(auctions))
                                                                })
                                                                res.json({
                                                                    message: "Boughtout"
                                                                });
                                                                delete idkauctions[req.body.auction]
                                                            fs.writeFileSync('./storage/auctions.json', JSON.stringify(auctions))
                                                            }
                                                            
                                                        })
                                                }
                                                else {
                                                    if (auctions[req.body.auction].bids.some(bid => bid.user === req.user.name)) {
        
                                                        let indextoChange = auctions[req.body.auction].bids.findIndex(bid => bid.user === req.user.name)
                                                        let newtokens = auctions[req.body.auction].bids[indextoChange].bid + user.tokens
                                                        User.findOneAndUpdate({username:req.user.name},
                                                            {
                                                               $set:{
                                                                tokens: newtokens
                                                               }
                                                            }).then(err=>{
                                                                User.findOneAndUpdate({username:req.user.name},
                                                                {
                                                                   $set:{
                                                                    tokens: newtokens - req.body.bid
                                                                   }
                                                                }).then(err=>{return;})
                                                                auctions[req.body.auction].bids[indextoChange].bid = req.body.bid
                                                        fs.writeFileSync('./storage/auctions.json', JSON.stringify(auctions))
                                                            })
                                                            
                                                        res.json({
                                                            message: "bid updated"
                                                        })
                                                        
                                                    }
                                                    else {
                                                        let bid = {
                                                            "user": req.user.name,
                                                            "bid": req.body.bid
                                                        }
                                                        auctions[req.body.auction].bids.push(bid)
                                                        fs.writeFileSync('./storage/auctions.json', JSON.stringify(auctions))
                                                        User.findOneAndUpdate({username:req.user.name},
                                                            {
                                                               $set:{
                                                                tokens: user.tokens - req.body.bid
                                                               }
                                                            }).then(err=>{return;})
                                                            
                                                            res.json({
                                                                message: "bid added"
                                                            })
                                                    }
                                                }
                                            }
                                            else {
                                                
                                                if (auctions[req.body.auction].bids.some(bid => bid.user === req.user.name)) {
        
                                                    let indextoChange = auctions[req.body.auction].bids.findIndex(bid => bid.user === req.user.name)
                                                    let newtokens = auctions[req.body.auction].bids[indextoChange].bid + user.tokens
                                                    User.findOneAndUpdate({username:req.user.name},
                                                        {
                                                           $set:{
                                                            tokens: newtokens
                                                           }
                                                        }).then(err=>{
                                                            User.findOneAndUpdate({username:req.user.name},
                                                            {
                                                               $set:{
                                                                tokens: newtokens - req.body.bid
                                                               }
                                                            }).then(err=>{return;})
                                                            auctions[req.body.auction].bids[indextoChange].bid = req.body.bid
                                                    fs.writeFileSync('./storage/auctions.json', JSON.stringify(auctions))
                                                        })
                                                        
                                                    res.json({
                                                        message: "bid updated"
                                                    })
                                                    
                                                }
                                                else {
                                                    let bid = {
                                                        "user": req.user.name,
                                                        "bid": req.body.bid
                                                    }
                                                    auctions[req.body.auction].bids.push(bid)
                                                    fs.writeFileSync('./storage/auctions.json', JSON.stringify(auctions))
                                                    User.findOneAndUpdate({username:req.user.name},
                                                        {
                                                           $set:{
                                                            tokens: user.tokens - req.body.bid
                                                           }
                                                        }).then(err=>{return;})
                                                        
                                                        res.json({
                                                            message: "bid added"
                                                        })
                                                }
                                            }
                                        }
                                        else {
                                            res.json({
                                                message: "your bid is the same as someone else."
                                            })
                                        }
                                      },50)
                                    
                                    
                                    
                                }
                                else {
                                    res.json({
                                        message: "bid needs to be higher than or equal to the starting bid"
                                    })
                                }
                                
                                
                                

                            }
                        }
                        else {
                            res.json({
                                message: "that auction does not exist"
                            })
                        }
                    }   
                    else {
                        res.json({
                            message: "not enough tokens"
                        })
                    }
                })
            }
            else {
                res.json({
                    message: "bid is not a number"
                })
            }
        }
        else {
            res.json({
                message: "bid is not a number"
            })
        }
    }
    else {
        res.json({
            message: "include bid amount and auction id"
        })
    }
    
}

module.exports = {
    addauction,
    bid
}