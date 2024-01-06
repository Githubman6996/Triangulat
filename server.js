const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const fs = require("fs")
// db.yourCollection.updateMany({}, {$set:{"someField": "someValue"}})
const User = require("./models/User")
let directory = "/Users/benja/triangulet"
const ApiRoute = require('./routes/api')
const JavascriptRoute = require("./routes/javascript")
const StyleRoute = require("./routes/styling")
//let auctions = require('./storage/auctions.json')
const config = require("./storage/config.json")
const DataRoute = require('./routes/data')
mongoose.connect(`mongodb://127.0.0.1:27017/${config.lower}`, { useNewUrlParser: true, useunifiedTopology: true })
const db = mongoose.connection
db.on('error', (err) => {
    console.log(err)
})
db.once('open', () => {
    console.log("Database Connnection Established")
  
  
  
  /*  setInterval(function () {
        time = new Date()
        if (`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}` == "12:0:0") {
            let highestBid;
            let highestBidder;
            console.log(`Selling all auctions: ${time}`)
            for (const auction in auctions) {
                const auctionObj = auctions[auction]
                let highestBid = auctionObj.startingbid;
                let highestBidder = null;
                if (auctionObj.bids.length == 1) {
                    highestBid = auctionObj.bids[0].bid
                    highestBidder = auctionObj.bids[0].user
                    User.findOne({
                        $or: [{
                            username: auctionObj.user
                        }]
                    })
                        .then(user => {
                            User.findOneAndUpdate({ username: auctionObj.user },
                                {
                                    $set: {
                                        tokens: user.tokens + highestBid
                                    }
                                }).then(err => { })
                            User.findOne({
                                $or: [{
                                    username: highestBidder
                                }]
                            })
                                .then(userr => {
                                    if (userr.trians.find(o => o.trian == auctionObj.trian)) {
                                        let triarray = userr.trians
                                        triarray.indexOfObject = function (property, value) {
                                            for (let i = 0, len = this.length; i < len; i++) {
                                                if (this[i][property] == value) return i;
                                            }
                                            return -1;
                                        }
                                        User.findOneAndUpdate({
                                            username: highestBidder
                                        }, {
                                            $set: {
                                                [`trians.${triarray.indexOfObject("trian", `${auctionObj.trian}`)}.quantity`]: userr.trians.find(o => o.trian == auctionObj.trian).quantity + auctionObj.amount
                                            }
                                        }).then(err => {
                                            return;
                                        })
                                    } else {
                                        User.findOneAndUpdate({
                                            username: highestBidder
                                        }, {
                                            $push: {
                                                trians: {
                                                    "trian": auctionObj.trian,
                                                    "quantity": auctionObj.amount
                                                }
                                            }
                                        }).then(err => {
                                            return;
                                        })
                                    }
                                })

                        })
                }
                else {
                    for (const bid of auctionObj.bids) {
                        if (bid.bid > highestBid) {
                            if (highestBidder == null) {
                            }
                            else {
                                User.findOne({
                                    $or: [{
                                        username: highestBidder
                                    }]
                                })
                                    .then(user => {
                                        User.findOneAndUpdate({ username: highestBidder },
                                            {
                                                $set: {
                                                    tokens: user.tokens + highestBid
                                                }
                                            }).then(err => { })
                                    })

                            }
                            highestBid = bid.bid;
                            highestBidder = bid.user;

                        } else {
                            User.findOne({
                                $or: [{
                                    username: bid.user
                                }]
                            })
                                .then(user => {
                                    User.findOneAndUpdate({ username: bid.user },
                                        {
                                            $set: {
                                                tokens: user.tokens + bid.bid
                                            }
                                        }).then(err => { })
                                })
                        }
                    }
                    setTimeout(function () {
                        if (auctionObj.bids.length == 0) {
                            User.findOne({
                                $or: [{
                                    username: auctionObj.user
                                }]
                            })
                                .then(user => {
                                    if (user.trians.find(o => o.trian == auctionObj.trian)) {
                                        let triarray = user.trians
                                        triarray.indexOfObject = function (property, value) {
                                            for (let i = 0, len = this.length; i < len; i++) {
                                                if (this[i][property] == value) return i;
                                            }
                                            return -1;
                                        }
                                        User.findOneAndUpdate({
                                            username: auctionObj.user
                                        }, {
                                            $set: {
                                                [`trians.${triarray.indexOfObject("trian", `${auctionObj.trian}`)}.quantity`]: user.trians.find(o => o.trian == auctionObj.trian).quantity + auctionObj.amount
                                            }
                                        }).then(err => {
                                            return;
                                        })
                                    } else {
                                        User.findOneAndUpdate({
                                            username: auctionObj.user
                                        }, {
                                            $push: {
                                                trians: {
                                                    "trian": auctionObj.trian,
                                                    "quantity": auctionObj.amount
                                                }
                                            }
                                        }).then(err => {
                                            return;
                                        })

                                    }
                                })

                        }
                        else {
                            User.findOne({
                                $or: [{
                                    username: auctionObj.user
                                }]
                            })
                                .then(user => {
                                    User.findOneAndUpdate({ username: auctionObj.user },
                                        {
                                            $set: {
                                                tokens: user.tokens + highestBid
                                            }
                                        }).then(err => { })
                                    User.findOne({
                                        $or: [{
                                            username: highestBidder
                                        }]
                                    })
                                        .then(userr => {
                                            if (userr.trians.find(o => o.trian == auctionObj.trian)) {
                                                let triarray = userr.trians
                                                triarray.indexOfObject = function (property, value) {
                                                    for (let i = 0, len = this.length; i < len; i++) {
                                                        if (this[i][property] == value) return i;
                                                    }
                                                    return -1;
                                                }
                                                User.findOneAndUpdate({
                                                    username: highestBidder
                                                }, {
                                                    $set: {
                                                        [`trians.${triarray.indexOfObject("trian", `${auctionObj.trian}`)}.quantity`]: userr.trians.find(o => o.trian == auctionObj.trian).quantity + auctionObj.amount
                                                    }
                                                }).then(err => {
                                                    return;
                                                })
                                            } else {
                                                User.findOneAndUpdate({
                                                    username: highestBidder
                                                }, {
                                                    $push: {
                                                        trians: {
                                                            "trian": auctionObj.trian,
                                                            "quantity": auctionObj.amount
                                                        }
                                                    }
                                                }).then(err => {
                                                    return;
                                                })
                                            }
                                        })

                                })
                        }
                        setTimeout(function () {
                            delete auctions[auction]
                            fs.writeFileSync('./storage/auctions.json', JSON.stringify(auctions))
                        }, 500)
                    }, 200)
                }
            }
        }
    }, 1000) */
    setInterval(function () {
        time = new Date()
        if (`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}` == "12:0:0") {
            User.updateMany({}, { $set: { posts: 0} }, (err, result) => {
                if (err) {
                  console.error(err);
                } else {
                  console.log(`Reset posts: ${time}`);
                }
              });
        }
    },1000)
})

const app = express()
app.get('/media/capsules/color/trians/rainbow.png', (req, res) => {
    res.sendFile("rainbow.gif", { root: directory + "/static/media/capsules/color/trians/" });
});
app.get('/media/capsules/emoji/trians/Clown%20Emoji.png', (req, res) => {
    res.sendFile("clown emoji.gif", { root: directory + "/static/media/capsules/emoji/trians/" });
});
app.get('/media/capsules/hat/trians/diamond%20hat.png', (req, res) => {
    res.sendFile("Diamond Hat.gif", { root: directory + "/static/media/capsules/hat/trians/" });
});
app.get('/media/capsules/space/trians/meteor.png', (req, res) => {
    res.sendFile("meteor.gif", { root: directory + "/static/media/capsules/space/trians/" });
});
app.get('/media/capsules/og/trians/monkey.png', (req, res) => {
    res.sendFile("monkey.gif", { root: directory + "/static/media/capsules/og/trians/" });
});
app.get('/media/capsules/hacker/trians/dark%20web.png', (req, res) => {
    res.sendFile("darkweb.gif", { root: directory + "/static/media/capsules/hacker/trians/" });
});
app.get('/media/capsules/chess/trians/pink%20knight.png', (req, res) => {
    res.sendFile("pinkknight.gif", { root: directory + "/static/media/capsules/chess/trians/" });
});
app.get('/media/capsules/sports/trians/gold%20bowling%20ball.png', (req, res) => {
    res.sendFile("goldenbowlingball.gif", { root: directory + "/static/media/capsules/sports/trians/" });
});
app.get('/favicon.png', (req, res) => {
    res.sendFile("favicon.png", { root: directory + "/static/media/misc/" });
});
app.get('/purplefavicon.png', (req, res) => {
    res.sendFile("purplefavicon.png", { root: directory + "/static/media/misc/" });
});
app.use(express.static('static'));
app.use(express.static('images'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'html');
app.use('/api', ApiRoute)
app.use('/', StyleRoute)
app.use('/', JavascriptRoute)
app.use('/data', DataRoute)
app.use(morgan("dev"))
app.all('*', (req, res) => {
    res.status(404).sendFile("404.html", { root: __dirname + "/views" });
});

app.disable('etag');
app.use(function (req, res, next) {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

let io = require('socket.io')(app.listen(80, () => console.log(`Instance started on port 80.`)))

require('./sockets/main.js')(io);