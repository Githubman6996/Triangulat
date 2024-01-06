const ValuesnCapsules = require("../apifunctions/opencapsule").ValuesnCapsules;

const sendTrians = (req,res,next) => {
    res.json({
        ValuesnCapsules
    })
}

module.exports = {
    sendTrians,
}