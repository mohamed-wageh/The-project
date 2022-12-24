const { Router } = require("express");
const product = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./tokenVerification");

const router = require("express").Router();
//CREATE

router.post("/", verifyToken, async(req, res) => {
    const newcart = new cart(req.body)

    try {
        const savecart = await newcart.save();
        res.status(200).json(savecart);
    } catch (err) {
        res.status(500).json(err);
    }
});
//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async(req, res) => {
    try {
        const updatedcart = await cart.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, { new: true });
        res.status(200).json(updatedcart);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete
router.delete("/:id", verifyTokenAndAuthorization, async(req, res) => {
    try {
        await cart.findByIdAndDelete(req.params.id);
        res.status(200).json("cart has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//get cart
router.get("/find/:userId", verifyTokenAndAuthorization, async(req, res) => {
    try {
        const cart = await cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get all 

router.get("/", verifyTokenAndAdmin, async(req, res) => {
    try {
        const carts = await cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;