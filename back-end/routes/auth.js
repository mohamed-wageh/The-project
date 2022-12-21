const router = require("express").Router();
const user = require("../models/user")
const cryptojs = require("crypto-js")
const jwt = require("jsonwebtoken");
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
        !user && res.status(401).json("wrong credentials!")
        const hashedpassword = cryptojs.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const originalpassword = hashedpassword.toString(cryptojs.enc.Utf8);

        originalpassword !== req.body.password &&
            res.status(401).json("wrong credentials!");

        constaccessToken = jwt.sign({
            id: user._id
        })

        const { password, ...others } = user._doc;


        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;