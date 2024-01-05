const jwt = require('jsonwebtoken')
const User = require('../models/User');
const ValuesnCapsules = [    {
    name: "Emoji",
    colors: ['f0ea0f','807d08'],
    value: 30,
    trians: [
        {
            name: "Sad Eyes Emoji",
            chance: "21.5",
            rarity: "Uncommon",
            sell: 5
            },
            {
            name: "Skull Emoji",
            chance: "21.5",
            rarity: "Uncommon",
            sell: 5
            },
            {
            name: "Rich Emoji",
            chance: "21.5",
            rarity: "Uncommon",
            sell: 5
            },
            {
            name: "Angry Emoji",
            chance: "6.7",
            rarity: "Rare",
            sell: 20
            },
            {
            name: "Eyebrow Emoji",
            chance: "6.7",
            rarity: "Rare",
            sell: 20
            },
            {
            name: "Cool Emoji",
            chance: "6.7",
            rarity: "Rare",
            sell: 20
            },
            {
            name: "Flushed Emoji",
            chance: "4.8",
            rarity: "Epic",
            sell: 75
            },
            {
            name: "Dead Emoji",
            chance: "4.8",
            rarity: "Epic",
            sell: 75
            },
            {
            name: "Devil Emoji",
            chance: "4.8",
            rarity: "Epic",
            sell: 75
            },
            {
            name: "Poop Emoji",
            chance: "0.45",
            rarity: "Legendary",
            sell: 200
            },
            {
            name: "Laughing Emoji",
            chance: "0.45",
            rarity: "Legendary",
            sell: 200
            },
            {
            name: "Cold Emoji",
            chance: "0.035",
            rarity: "Chroma",
            sell: 300
            },
            {
            name: "Hot Emoji",
            chance: "0.035",
            rarity: "Chroma",
            sell: 300
            },
            {
            name: "Clown Emoji",
            chance: "0.003",
            rarity: "Mystical",
            sell: 500
            }
    ]
},{
    name: "Hat",
    colors: ['ff54c9','e398cb'],
    value: 35,
    trians: [
        {
            name: "Blue Cap",
            chance: "14.5",
            rarity: "Uncommon",
            sell: 5
        },
        {
            name: "Green Cap",
            chance: "14.5",
            rarity: "Uncommon",
            sell: 5
        },
        {
            name: "Red Cap",
            chance: "12.5",
            rarity: "Uncommon",
            sell: 5
        },
        {
            name: "Grey Cap",
            chance: "12.5",
            rarity: "Uncommon",
            sell: 5
        },
        {
            name: "Cowboy Hat",
            chance: "10",
            rarity: "Rare",
            sell: 20
        },
        {
            name: "Straw Hat",
            chance: "10",
            rarity: "Rare",
            sell: 20
        },
        {
            name: "Sombrero",
            chance: "7",
            rarity: "Epic",
            sell: 75
        },
        {
            name: "Top Hat",
            chance: "6.8",
            rarity: "Epic",
            sell: 75
        },
        {
            name: "Fedora",
            chance: "1",
            rarity: "Legendary",
            sell: 200
        },
        {
            name: "Golden Top Hat",
            chance: "0.02",
            rarity: "Chroma",
            sell: 300
        },
        {
            name: "Diamond Hat",
            chance: "0.001",
            rarity: "Mystical",
            sell: 500
        },
    ]
},
{
        name: "OG",
        colors: ["72aaf3", "febf3e"],
        value: 30,
        trians: [{
                name: "Trixter",
                chance: "25",
                rarity: 'Uncommon',
                sell: 5
            }, {
                name: "BRP",
                chance: "25",
                rarity: 'Uncommon',
                sell: 5
            }, {
                name: "Xotic",
                chance: "15",
                rarity: 'Rare',
                sell: 20
            }, {
                name: "LukeDuke",
                chance: "3",
                rarity: 'Epic',
                sell: 75
            }, {
                name: "Hans Island",
                chance: "3",
                rarity: 'Epic',
                sell: 75
            },
            {
                name: "EvDogg09",
                chance: "1",
                rarity: 'Legendary',
                sell: 200
            }, {
                name: "ColControl",
                chance: "0.05",
                rarity: 'Chroma',
                sell: 300
            }, {
                name: "Bringles",
                chance: "0.05",
                rarity: 'Chroma',
                sell: 300
            }, {
                name: "monkey",
                chance: "0.001",
                rarity: 'Mystical',
                sell: 500
            }, {
                name: "penguinpowers",
                chance: "0.001",
                rarity: 'Mystical',
                sell: 500
            }
        ],
    },
    {
        name: "Hacker",
        colors: ["000000", "00ff00"],
        value: 25,
        trians: [{
            name: "Hacker",
            chance: "15",
            rarity: 'Uncommon',
            sell: 5
        }, {
            name: "ERROR",
            chance: "15",
            rarity: 'Uncommon',
            sell: 5
        }, {
            name: "Virus",
            chance: "15",
            rarity: 'Uncommon',
            sell: 5
        }, {
            name: "Banned",
            chance: "15",
            rarity: 'Uncommon',
            sell: 5
        }, {
            name: "Hacker Bot",
            chance: "10",
            rarity: 'Rare',
            sell: 20
        }, {
            name: "Hacker Code",
            chance: "8",
            rarity: 'Rare',
            sell: 20
        }, {
            name: "Glitch",
            chance: "6",
            rarity: 'Rare',
            sell: 20
        }, {
            name: "Bomb",
            chance: "3",
            rarity: 'Epic',
            sell: 75
        }, {
            name: "Letter",
            chance: "3",
            rarity: 'Epic',
            sell: 75
        }, {
            name: "Idiot",
            chance: "1",
            rarity: 'Legendary',
            sell: 200
        }, {
            name: "Lovely Letter",
            chance: "0.05",
            rarity: 'Chroma',
            sell: 300
        }, {
            name: "Overload",
            chance: "0.01",
            rarity: 'Chroma',
            sell: 500
        }, {
            name: "Dark Web",
            chance: "0.001",
            rarity: "Mystical",
            sell: 500
        }]
    },
    {
        name: "Chess",
        colors: ['A66D1B', '060606'],
        value: 25,
        trians: [{
                name: "White Pawn",
                chance: "19",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Black Pawn",
                chance: "19",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "White Knight",
                chance: "19",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Black Knight",
                chance: "19",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "White Bishop",
                chance: "10",
                rarity: "Rare",
                sell: 20
            },
            {
                name: "Black Bishop",
                chance: "10",
                rarity: "Rare",
                sell: 20
            },
            {
                name: "White Rook",
                chance: "5",
                rarity: "Epic",
                sell: 75
            },
            {
                name: "Black Rook",
                chance: "5",
                rarity: "Epic",
                sell: 75
            },
            {
                name: "White Queen",
                chance: "0.5",
                rarity: "Legendary",
                sell: 200
            },
            {
                name: "Black Queen",
                chance: "0.5",
                rarity: "Legendary",
                sell: 200
            },
            {
                name: "White King",
                chance: "0.03",
                rarity: "Chroma",
                sell: 300
            },
            {
                name: "Black King",
                chance: "0.03",
                rarity: "Chroma",
                sell: 300
            },
            {
                name: "Pink Knight",
                chance: "0.001",
                rarity: "Mystical",
                sell: 500
            },
        ]
    }, {
        name: "Space",
        colors: ['ffffff', '000050'],
        value: 25,
        trians: [{
                name: "Earth",
                chance: "19",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Moon",
                chance: "19",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Mars",
                chance: "13",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Saturn",
                chance: "10",
                rarity: "Rare",
                sell: 20
            },
            {
                name: "Neptune",
                chance: "10",
                rarity: "Rare",
                sell: 20
            },
            {
                name: "Uranus",
                chance: "5",
                rarity: "Epic",
                sell: 75
            },
            {
                name: "Rocket",
                chance: "5",
                rarity: "Epic",
                sell: 75
            },
            {
                name: "Sun",
                chance: "0.5",
                rarity: "Legendary",
                sell: 200
            },
            {
                name: "Galaxy",
                chance: "0.5",
                rarity: "Legendary",
                sell: 200
            },
            {
                name: "Tim the Alien",
                chance: "0.03",
                rarity: "Chroma",
                sell: 300
            },
            {
                name: "Northern Lights",
                chance: "0.03",
                rarity: "Chroma",
                sell: 300
            },
            {
                name: "Black Hole",
                chance: "0.03",
                rarity: "Chroma",
                sell: 300
            },
            {
                name: "Meteor",
                chance: "0.001",
                rarity: "Mystical",
                sell: 500
            }

        ],
    }, {
        name: "Color",
        colors: ["E03333", "E8CD4A"],
        value: 20,
        trians: [{
                name: "Red",
                chance: "25",
                rarity: 'Uncommon',
                sell: 5
            },
            {
                name: "Blue",
                chance: "25",
                rarity: 'Uncommon',
                sell: 5
            },
            {
                name: "Yellow",
                chance: "25",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Orange",
                chance: "15",
                rarity: 'Rare',
                sell: 20
            },
            {
                name: "Purple",
                chance: "13",
                rarity: 'Rare',
                sell: 20
            },
            {
                name: "Green",
                chance: "10",
                rarity: 'Rare',
                sell: 20
            },
            {
                name: "Black",
                chance: "3",
                rarity: "Epic",
                sell: 75
            },
            {
                name: "Brown",
                chance: "2",
                rarity: "Epic",
                sell: 75
            },
            {
                name: "Pink",
                chance: "1",
                rarity: "Legendary",
                sell: 200
            },
            {
                name: "White",
                chance: "1",
                rarity: "Legendary",
                sell: 200
            },
            {
                name: "Silver",
                chance: "0.5",
                rarity: "Chroma",
                sell: 300
            },
            {
                name: "Gold",
                chance: "0.1",
                rarity: "Chroma",
                sell: 300
            },
            {
                name: "Rainbow",
                chance: "0.001",
                rarity: "Mystical",
                sell: 500
            }

        ],
    }, {
        name: "Food",
        colors: ["ff0000", "ffffff"],
        value: 20,
        trians: [{
                name: "Watermelon",
                chance: "18",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Carrot",
                chance: "18",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Pizza",
                chance: "17",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Cookie",
                chance: "16",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Strawberry",
                chance: "16",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Pastry",
                chance: "10",
                rarity: "Rare",
                sell: 20
            },
            {
                name: "Popcicle",
                chance: "7.3",
                rarity: "Rare",
                sell: 20
            },
            {
                name: "Donut",
                chance: "7.2",
                rarity: "Rare",
                sell: 20
            },
            {
                name: "Pie",
                chance: "7.1",
                rarity: "Rare",
                sell: 20
            },
            {
                name: "Waffle",
                chance: "7",
                rarity: "Rare",
                sell: 20,
            },
            {
                name: "Candy Corn",
                chance: "4.75",
                rarity: "Epic",
                sell: 75
            },
            {
                name: "Chocolate Cake",
                chance: "4.75",
                rarity: "Epic",
                sell: 75
            },
            {
                name: "Sandwich",
                chance: "0.5",
                rarity: "Legendary",
                sell: 200
            },
            {
                name: "Vanilla Cake",
                chance: "0.1",
                rarity: "Legendary",
                sell: 200
            },
            {
                name: "Chocolate Bar",
                chance: "0.09",
                rarity: "Chroma",
                sell: 300,
            },
            {
                name: "Golden Carrot",
                chance: "0.06",
                rarity: "Chroma",
                sell: 300
            },
            {
                name: "Kiss",
                chance: "0.0069",
                rarity: "Mystical",
                sell: 500
            }
        ],

    },
    {
        name: "Sports",
        colors: ['FFFFFF', 'FFEF5F'],
        value: 20,
        trians: [{
                name: "Soccer Ball",
                chance: "19",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Football",
                chance: "19",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Basketball",
                chance: "19",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Baseball",
                chance: "19",
                rarity: "Uncommon",
                sell: 5
            },
            {
                name: "Boomerang",
                chance: "10",
                rarity: "Rare",
                sell: 20
            },
            {
                name: "Volleyball",
                chance: "10",
                rarity: "Rare",
                sell: 20
            },
            {
                name: "Tennis Ball",
                chance: "10",
                rarity: "Rare",
                sell: 20
            },
            {
                name: "Pool Rack",
                chance: "5",
                rarity: "Epic",
                sell: 75
            },
            {
                name: "Bowling Ball",
                chance: "2",
                rarity: "Epic",
                sell: 75
            },
            {
                name: "Birdie",
                chance: "0.5",
                rarity: "Legendary",
                sell: 200
            },
            {
                name: "Beach Ball",
                chance: "0.03",
                rarity: "Chroma",
                sell: 300
            },
            {
                name: "Gold Bowling Ball",
                rarity: "Mystical",
                chance: "0.005",
                sell: 500
            }
        ]
    },
]

const opencapsule = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, '*&^slkdfhlkh&^%ksn32``', function (err, decode) {
        if (err) {
            res.json({
                error: err
            })
        }
        else {
        User.findOne({
                $or: [{
                    username: decode.name
                }]
            })
            .then(user => {
                if (!user) {
                    res.json({
                        error: "An error occurred."
                    })
                }
                else {
                    if (req.body.capsule && typeof req.body.capsule === 'string') {
                        if (ValuesnCapsules.find(o => o.name === req.body.capsule)) {
                            if (user.tokens == ValuesnCapsules.find(o => o.name === req.body.capsule).value || user.tokens >= ValuesnCapsules.find(o => o.name === req.body.capsule).value) {
                                let trians = ValuesnCapsules.find(o => o.name === req.body.capsule).trians;
                                let trian;
                                for (let done = false; !done;) {
                                    trian = trians[Math.floor(Math.random() * trians.length)];
                                    if (Math.random() * 100 <= ValuesnCapsules.find(o => o.name === req.body.capsule).trians.find(o => o.name === trian.name).chance / 100) done = true;
                                }
                                newtokens = user.tokens - ValuesnCapsules.find(o => o.name === req.body.capsule).value
                                User.findOneAndUpdate({
                                    username: decode.name
                                }, {
                                    $set: {
                                        tokens: newtokens
                                    }
                                }).then(err => {
                                    return;
                                })
                                if (user.opened === 0) {
                                    User.findOneAndUpdate({
                                        username: decode.name
                                    }, {
                                        $set: {
                                            opened: 1
                                        }
                                    }).then(err => {
                                        return;
                                    })
                                } else {
                                    User.findOneAndUpdate({
                                        username: decode.name
                                    }, {
                                        $set: {
                                            opened: user.opened + 1
                                        }
                                    }).then(err => {
                                        return;
                                    })
                                }
    
                                if (user.trians.find(o => o.trian === trian.name)) {
                                    if (user.trians.find(o => o.trian == trian.name)) {

                                    let triarray = user.trians
                                    triarray.indexOfObject = function (property, value) {
                                        for (let i = 0, len = this.length; i < len; i++) {
                                            if (this[i][property] === value) return i;
                                        }
                                        return -1;
                                    }
                                    User.findOneAndUpdate({
                                        username: decode.name
                                    }, {
                                        $set: {
                                            [`trians.${triarray.indexOfObject("trian", `${trian.name}`)}.quantity`]: user.trians.find(o => o.trian == trian.name).quantity + 1
                                        }
                                    }).then(err => {
                                        return;
                                    })
                                    res.json({
                                        trian: trian.name,
                                        rarity: trian.rarity,
                                        new: false,
                                    });
                                }
                                else {
                                    User.findOneAndUpdate({
                                        username: decode.name
                                    }, {
                                        $push: {
                                            trians: {
                                                "trian": trian.name,
                                                "quantity": 1
                                            }
                                        }
                                    }).then(err => {
                                        return;
                                    })
                                    res.json({
                                        trian: trian.name,
                                        rarity: trian.rarity,
                                        new: true,
                                    });
                                }
                                } else {
                                    User.findOneAndUpdate({
                                        username: decode.name
                                    }, {
                                        $push: {
                                            trians: {
                                                "trian": trian.name,
                                                "quantity": 1
                                            }
                                        }
                                    }).then(err => {
                                        return;
                                    })
                                    res.json({
                                        trian: trian.name,
                                        rarity: trian.rarity,
                                        new: true,
                                    });
                                }
    
                            } else {
                                res.json({
                                    message: "Not enough tokens"
                                })
                            }
                        } else {
                            res.json({
                                message: "invalid capsule"
                            })
                        }
                    } else {
                        res.json({
                            message: "please include a capsule"
                        })
                    }
                }
            })
        }
    })
}

module.exports = {
    opencapsule,
    ValuesnCapsules
}