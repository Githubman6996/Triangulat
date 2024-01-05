const express = require('express')
const router = express.Router()
let directory = "/Users/benja/triangulet"
router.get('/', (req, res) => {
    res.sendFile("index.html", { root: directory + "/views/" });
});
router.get('/credits', (req, res) => {
    res.sendFile("credits.html", { root: directory + "/views/" });
});

router.get('/auction', (req, res) => {
    res.sendFile("auction.html", { root: directory + "/views/" });
});

router.get('/market', (req, res) => {
    res.sendFile("market.html", { root: directory + "/views/" });
});

router.get('/settings', (req, res) => {
    res.sendFile("settings.html", { root: directory + "/views/" });
});

router.get('/logout', (req, res) => {
    res.sendFile("logout.html", { root: directory + "/views/" });
});
router.get('/stats', (req, res) => {
        res.sendFile("stats.html", { root: directory + "/views/" });
});

router.get('/register', (req, res) => {
    res.sendFile("register.html", { root: directory + "/views/" });
});

router.get('/trians', (req, res) => {
    res.sendFile("trians.html", { root: directory + "/views/" });
});
router.get('/staff', (req, res) => {
    res.sendFile("staff.html", { root: directory + "/views/" });
});
router.get('/getkey', (req, res) => {
    res.sendFile("getkey.html", { root: directory + "/views/" });
});


router.get('/posts', (req, res) => {
    res.sendFile("posts.html", { root: directory + "/views/" });
});

router.get('/login', (req, res) => {
    res.sendFile("login.html", { root: directory + "/views/" });
});
router.get('/posts/create', (req, res) => {
    res.sendFile("create.html", { root: directory + "/views/" });
});
router.get('/main.css', (req, res) => {
    res.sendFile("main.css", { root: directory + "/views/" });
});
router.get('/fontawesome6.3.0.css', (req, res) => {
    res.sendFile("all.css", { root: directory + "/views/" });
});
router.get('/config.json', (req, res) => {
    res.sendFile("config.json", { root: directory + "/storage/" });
});

module.exports = router