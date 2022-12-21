const router = require("express").Router();
const user = require("../models/user")
const cryptojs = require("crypto-js")
    //register
router.post("/register", async(req, res) => {
    const newuser = new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptojs.AES.encrypt(req.body.password, process.env.pass_sec).toString(),

    });

    try {
        const savedUser = await newuser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }

});

//LOGIN

router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        const hashedpassword = cryptojs.AES.decrypt(
            user.password, process.env.PASS_SEC);
        const password = hashedpassword.toString(cryptojs.enc.Utf8);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;