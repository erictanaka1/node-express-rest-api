// Currently in file src/controllers/productControllers.js
const productService = require('../services/productService')

// Get all products
const getAllProducts = (req, res) => {
    const allProducts = productService.getAllProducts();

    res.send({ status: "OK", data: allProducts });
};

const getProductById = (req, res) => {
    const product = productService.getProductById();

    res.send("Get specific product by ID");
};

const createNewProduct = (req, res) => {
    const { body } = req;

    if (
        !body.name || 
        !body.description || 
        !body.value
        ) {
            return;
        }

    const newProduct = {
        name: body.name,
        description: body.description,
        value: body.value,
    };
    
    const createdProduct = productService.createNewProduct(newProduct);

    res.status(201).send({ status:"OK", data: createdProduct});
};

const updateProductById = (req, res) => {
    const updatedProduct = productService.updateProductById();

    res.send("Update an existing product");
};

const deleteProductById = (req, res) => {
    const deletdProduct = productService.deleteProductById();

    res.send("Delete an existing product");
}

module.exports = {
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProductById,
    deleteProductById,
};

