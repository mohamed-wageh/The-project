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
router.delete("/:id", verifyTokenAndAdmin, async(req, res) => {
    try {
        await product.findByIdAndDelete(req.params.id);
        res.status(200).json("product has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//get product
router.get("/find/:id", async(req, res) => {
    try {
        const product = await product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get all product
router.get("/", async(req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;

        if (qNew) {
            product = await product.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
            products = await product.find({
                categories: {
                    $in: [qCategory],
                },
            });
        } else {
            products = await product.find();
        }


        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;