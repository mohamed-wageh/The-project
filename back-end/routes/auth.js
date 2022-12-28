const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const cloudinary = require('cloudinary');
//register
router.post("/register", async (req, res) => {
    const result = await cloudinary.v2.uploader.upload(req.body.user, {
        folder: 'users'
    })
    const newUser = new User({
        username: req.body.username,
        email: UserSchema.path('email').validate(async (email) => {
            const emailCount = await mongoose.models.users.countDocuments({ email })
            return !emailCount
        }, 'Email already exists'),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SEC_KEY).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }

});

//LOGIN

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(401).json("wrong credentials!");
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.SEC_KEY
        );
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        if (originalPassword !== req.body.password)
            return res.status(401).json("wrong credentials!");

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        },
            process.env.JWTPRIVATEKEY, { expiresIn: "5d" });
        const { password, ...others } = user._doc;
        return res.status(200).json({ ...others, accessToken });

    } catch (err) {
        res.status(500).json(err)
    }
});
module.exports = router;