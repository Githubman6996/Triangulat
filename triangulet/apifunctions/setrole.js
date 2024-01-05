const User = require('../models/User');


const setrole = (req,res,next) => {
    User.findOne({
        $or: [{
            username: req.user.name
        }]
    })
    .then(user => {
        if (user.role === "Owner" || user.role === "Admin") {
            if (req.body.newrole && req.body.username && typeof req.body.usernam === 'string' && typeof req.body.newrole === 'string') {
                if (user.username === "penguinpowers") {
                    if (req.body.newrole === "Admin" || req.body.newrole === "Mod" || req.body.newrole === "Helper" || req.body.newrole === "Artist" || req.body.newrole === "Booster" || req.body.newrole === "Normal") {
                        User.findOneAndUpdate({
                            username: req.body.username
                        }, {
                            $set: {
                                role: req.body.newrole
                            }
                        }).then(err => {
                            return;
                        })
                        res.json({
                            message: `set ${req.body.username}'s role to ${req.body.newrole}`
                        })
                    }
                    else {
                        res.json({
                            message: "that is not a role."
                        })
                    }
                }
                else {
                    if (user.role === req.body.newrole || user.role === "Admin" && req.body.newrole === "Owner") {
                        res.json({
                            message: "You cant set users roles to something equal or higher than your role."
                        })
                    }
                    else {
                        if (req.body.newrole === "Admin" || req.body.newrole === "Mod" || req.body.newrole === "Helper" || req.body.newrole === "Artist" || req.body.newrole === "Booster" || req.body.newrole === "Normal") {
                            User.findOne({
                                $or: [{
                                    username: req.body.username
                                }]
                            })
                            .then(userr => {
                                if (userr) {
                                    if (userr.role === req.body.newrole) {
                                        res.json({
                                            message: "user already has that role."
                                        })
                                    }
                                    else {
                                        if (user.role === "Admin" && userr.role === "Admin" || user.role === "Admin" && userr.role === "Owner") {
                                            res.json({
                                                message: "Admin set someone that is Admin/Owner conflict"
                                            })
                                        }
                                        else {
                                            if (user.role === "Owner" && userr.role === "Owner") {
                                                res.json({
                                                    message: "Owner set someone that is Owner conflict"
                                                })
                                            }
                                            else {
                                                if (userr.role === "Normal" || userr.role === "Artist" || userr.role === "Booster") {
                                                User.findOneAndUpdate({
                                                    username: req.body.username
                                                }, {
                                                    $set: {
                                                        role: req.body.newrole
                                                    }
                                                }).then(err => {
                                                    return;
                                                })
                                                res.json({
                                                    message: `set ${req.body.username}'s role to ${req.body.newrole}`
                                                })
                                            }
                                            else {
                                                res.json({
                                                    message: "you cant change staff silly!"
                                                })
                                            }
                                            }
                                        }
                                    }
                                }
                                else {
                                    res.json({
                                        message: "that user does not exist"
                                    })
                                }
                            })
                        }
                        
                        else {
                            res.json({
                                message: "that is not a role."
                            })
                        }
                    }
                }
                
            }
            else {
                res.json({
                    message: "Include a role and a user."
                })
            }
        }
        else {
            res.json({
                message: "Unothorized"
            })
        }
    })
    
}

module.exports = {
    setrole
}