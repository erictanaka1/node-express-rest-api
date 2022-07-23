// Currently in file src/controllers/productControllers.js
const productService = require('../services/productService')

const getAllProducts = (req, res) => {
    const allProducts = productService.getAllProducts();

    res.send("Get all products");
};

const getProductById = (req, res) => {
    const product = productService.getProductById

    res.send("Get specific product by ID");
};

const createNewProduct = (req, res) => {
    const newProduct = productService.createNewProduct

    res.send("Create a new product");
};

const updateProductById = (req, res) => {
    const updatedProduct = productService.updateProductById

    res.send("Update an existing product");
};

const deleteProductById = (req, res) => {
    const deletdProduct = productService.deleteProductById

    res.send("Delete an existing product");
}

module.exports = {
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProductById,
    deleteProductById,
};

