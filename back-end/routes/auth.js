const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const cloudinary = require('cloudinary');
//register
router.post(
    "/register",
    [
        check("firstName", "firstName is requierd").not().isEmpty(),
        check("lastName", "lastName is requierd").not().isEmpty(),
        check("email", " please include a vaild email ").isEmail(),
        check("password", "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number").isStrongPassword({
        }),
        check('phone').isLength({ atmost: 11 }).isMobilePhone()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {email, password, phone, firstName, lastName, isAdmin } = req.body;
        try {
            //check if user exists
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ errors: [{ msg: 'user already exists' }] });
            }
            user = new User({
                email,
                password,
                phone,
                firstName,
                lastName,
                isAdmin
            });

            //encrypt password 
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();

            //return jsonwebtoken
            const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin,
            },
                process.env.JWTPRIVATEKEY, { expiresIn: "30d" });
            res.status(200).json({ accessToken });

        } catch (error) {
            console.error(error.message)
            res.status(500).send('server error')
        }
    }
);

//LOGIN

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: "User does not exist. " });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

        const token = jwt.sign({ id: user._id }, process.env.JWTPRIVATEKEY);
        delete user.password;
        return res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;