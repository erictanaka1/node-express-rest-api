// Currently in file src/services/productServices.js
const Product = require('../database/Product');
const { v4: uuid } = require('uuid');

const getAllProducts = () => {
    return Product.getAllProducts();
};

const getProductById = (productId) => {
    const product = Product.getProductById(productId);

    return product;
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

const updateProductById = (productId, productNewData) => {
    const productToUpdate = {
        id: productId,
        ...productNewData,
    }
    
    const updatedProduct = Product.updateProductById(productToUpdate);
    
    return updatedProduct;
};

const deleteProductById = (productId) => {
    const deletedProduct = Product.deleteProductById(productId);

    return deletedProduct;
}

module.exports = {
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProductById,
    deleteProductById,
};
