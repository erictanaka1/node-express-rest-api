// Currently in file src/controllers/productControllers.js
const productService = require("../services/productService");

// Get all products
const getAllProducts = (req, res) => {
    const allProducts = productService.getAllProducts();

    res.send({ status: "OK", data: allProducts });
};

const getProductById = (req, res) => {
    const {
        params: { productId },
    } = req;

    if(!productId) {
        return;
    }

    const product = productService.getProductById(productId);

    res.status(201).send({ status: "OK", data: product });
};

const createNewProduct = (req, res) => {
    const { body } = req;

    if (!body.name || !body.description || !body.value) {
        return;
    }

    const newProduct = {
        name: body.name,
        description: body.description,
        value: body.value,
    };

    const createdProduct = productService.createNewProduct(newProduct);

    res.status(201).send({ status: "OK", data: createdProduct });
};

const updateProductById = (req, res) => {
    const { body, params: { productId } } = req;

    if(!productId || !body) {
        return;
    }

    const updatedProduct = productService.updateProductById(productId, body);

    res.status(201).send({ status: "OK", data: updatedProduct });
};

const deleteProductById = (req, res) => {
    const {
        params: { productId },
    } = req;

    if(!productId) {
        return;
    }
    
    const deletedProduct = productService.deleteProductById(productId);

    res.status(200).send({ status: "OK", data: deletedProduct });
};

module.exports = {
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProductById,
    deleteProductById,
};
