const express = require('express')
const router = express.Router()
let directory = "/Users/benja/triangulet"
router.get('/js/sendregister.js', (req, res) => {
    res.sendFile("sendregister.js", { root: directory + "/javascript/" });
});
router.get('/media/misc/background.png', (req, res) => {
    res.sendFile("background.png", { root: directory + "/media/misc" });
});
router.get('/js/jquery.js', (req, res) => {
    res.sendFile("jquery.js", { root: directory + "/javascript/" });
});
router.get('/js/login.js', (req, res) => {
    res.sendFile("login.js", { root: directory + "/javascript/" });
});
router.get('/js/stats.js', (req, res) => {
    res.sendFile("stats.js", { root: directory + "/javascript/" });
});
router.get('/js/themes.js', (req, res) => {
    res.sendFile("themes.js", { root: directory + "/javascript/" });
});
router.get('/js/settings.js', (req, res) => {
    res.sendFile("settings.js", { root: directory + "/javascript/" });
});
router.get('/js/credits.js', (req, res) => {
    res.sendFile("credits.js", { root: directory + "/javascript/" });
});
router.get('/js/auction.js', (req, res) => {
    res.sendFile("auction.js", { root: directory + "/javascript/" });
});
router.get('/js/logout.js', (req, res) => {
    res.sendFile("logout.js", { root: directory + "/javascript/" });
});
router.get('/js/market.js', (req, res) => {
    res.sendFile("market.js", { root: directory + "/javascript/" });
});
router.get('/js/all.js', (req, res) => {
    res.sendFile("all.js", { root: directory + "/javascript/" });
});
router.get('/js/staff.js', (req, res) => {
    res.sendFile("staff.js", { root: directory + "/javascript/" });
});

router.get('/js/posts.js', (req, res) => {
    res.sendFile("posts.js", { root: directory + "/javascript/" });
});
router.get('/js/create.js', (req, res) => {
    res.sendFile("create.js", { root: directory + "/javascript/" });
});
router.get('/js/trians.js', (req, res) => {
    res.sendFile("trians.js", { root: directory + "/javascript/" });
});
module.exports = router