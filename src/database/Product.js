// Currently in file src/database/Product.js
const DB = require('./temporary_db.json');
const { saveToDatabase } = require('./utils');

const getAllProducts = () => {
    return DB.products;
};

const getProductById = () => {
    return;
};

const createNewProduct = (newProduct) => {
    const isAlreadyAdded = DB.products.findIndex((product) => product.name === newProduct.name) > -1;

    if (isAlreadyAdded) {
        return;
    }
    
    DB.products.push(newProduct);
    saveToDatabase(DB);

    return newProduct;
};

const updateProductById = () => {
    return;
};

const deleteProductById = () => {
    return;
};




module.exports = {
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProductById,
    deleteProductById,
};