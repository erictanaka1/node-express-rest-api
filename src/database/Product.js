// Currently in file src/database/Product.js
const DB = require("./temporary_db.json");
const { saveToDatabase } = require("./utils");

const getAllProducts = () => {
    return DB.products;
};

const getProductById = (productId) => {
    const product = DB.products.find((product) => product.id == productId);

    if (!product) {
        return;
    }

    return product;
};

const createNewProduct = (newProduct) => {
    const isAlreadyAdded =
        DB.products.findIndex((product) => product.name === newProduct.name) >
        -1;

    if (isAlreadyAdded) {
        return;
    }

    DB.products.push(newProduct);
    saveToDatabase(DB);

    return newProduct;
};

const updateProductById = (productToUpdate) => {
    const productToUpdateIndex = DB.products.findIndex(
        (product) => product.id == productToUpdate.id
    );

    if (productToUpdateIndex === -1) {
        return {
            message: "Index not found",
            searched_id: productToUpdate.id,
        };
    }

    const updatedProduct = {
        ...DB.products[productToUpdateIndex],
        ...productToUpdate,
        updated_at: new Date().toLocaleString("pt-BR", { timeZone: "UTC" }),
    };

    DB.products[productToUpdateIndex] = updatedProduct;

    saveToDatabase(DB);

    return updatedProduct;
};

const deleteProductById = (productId) => {
    const productIndexToDelete = DB.products.findIndex(
        (product) => product.id == productId
    );

    if (productIndexToDelete === -1) {
        return {
            message: "Index not found",
            searched_id: productId,
        };
    }

    const deletedProduct = DB.products.splice(productIndexToDelete, 1);

    saveToDatabase(DB);

    return deletedProduct;
};

module.exports = {
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProductById,
    deleteProductById,
};
