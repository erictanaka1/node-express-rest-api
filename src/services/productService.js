// Currently in file src/services/productServices.js
const Product = require('../database/Product');
const { v4: uuid } = require('uuid');

const getAllProducts = () => {
    return Product.getAllProducts();
};

const getProductById = () => {
    return;
};

const createNewProduct = (newProduct) => {
    const productToInsert = {
        id: uuid(),
        ...newProduct,
        created_at: new Date().toLocaleString('pt-BR', { timeZone: "UTC" }),
        updated_at: new Date().toLocaleString('pt-BR', { timeZone: "UTC" }),
    };

    const createdProduct = Product.createNewProduct(productToInsert);
    
    return createdProduct;
};

const updateProductById = () => {
    return;
};

const deleteProductById = () => {
    return;
}

module.exports = {
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProductById,
    deleteProductById,
};
