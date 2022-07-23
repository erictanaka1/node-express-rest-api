// Currently in file src/v1/routes/productRoutes.js
const express = require('express');
const productController = require('../../controllers/productController');

const router = express.Router();

router.get("/", productController.getAllProducts);

router.get("/:productId", productController.getProductById);

router.post("/create", productController.createNewProduct);

router.patch("/update/:productId", productController.updateProductById);

router.delete("/delete/:productId", productController.deleteProductById);

module.exports = router;
