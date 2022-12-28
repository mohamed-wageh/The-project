const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./tokenVerification");
const Product  = require("../models/Product");
const router = require("express").Router();
const cloudinary = require ("../utils/cloudinary");
//Add new product
router.post("/", verifyTokenAndAdmin, async(req, res , next) => {
    const {name, categories, description, image, size , color , price , stock , rating} = req.body;

    try {
        const result = await cloudinary.v2.uploader.upload(image , {
            folder: Products,
        })
        const savedProduct = await Product.save({
            name,
             categories,
              description,
               image:{
                public_id : result.public_id,
                url: result.secure_url
               },
                size ,
                 color ,
                  price ,
                   stock,
                   rating
        });
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});
//UPDATE
router.put("/:id", verifyTokenAndAdmin, async(req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, 
            { new: true });
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete
router.delete("/:id", verifyTokenAndAdmin, async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Successfully deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});
//get product
router.get("/find/:id", async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
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
            products = await Product.find().sort({ createdAt: -1 }).limit(2);
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            });
        } else {
            products = await Product.find();
        }


        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});
//search by name, categories , brand , size , color , description

router.get("/search/products" , async(req, res) =>{
    try{
        const {key , page , limit} = req.query
        const skip = (page - 1) * limit
        const search = key ? {
            "$or": [
                    {name: {$regex: key , $options: "$i"}},
                    {brand: {$regex: key , $options: "$i"}},
                    {description : {$regex: key , $options: "$i"}},  
            ]
        } : {}
        const products = await Product.find(search).skip(skip).limit(limit)
        res.status(200).json({products})
    }catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;