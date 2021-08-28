const express = require('express');
const router = express.Router();


const {isAdmin,isAuthenticated,isSignedIn} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")
const {getProductById,createProduct,getProduct,photo,deleteProduct,updateProduct,getAllProducts,getCategories} = require("../controllers/product")


router.param("userId",getUserById);
router.param("productId",getProductById);



// Routes

router.post("/product/create/:userId",isSignedIn,isAuthenticated,isAdmin,createProduct);

// READ

router.get("/product/:productId",getProduct)
router.get("/product/photo/:productId",photo);

// UPDATE
router.put("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,updateProduct)

// DELETE 
router.delete("/product/:productId/:userId",isSignedIn,isAuthenticated,isAdmin,deleteProduct)

// Product List
router.get("/products",getAllProducts)


router.get("/products/categories",getCategories)



module.exports = router;




