/*
This service is NOT concerned with req and res, it doesn't know or care about
it.
*/

import { Product } from "../models/index.js";

export const createProduct = async (data) => {
    const newProduct = await Product.create(data);
    return newProduct;
};

export const getAllProducts = async () => Product.find();

export const getAllProductsPriceSortedAsc = async () =>
    Product.find().sort({ price: "asc" });

export const getOneProduct = async (id) => Product.findById(id);

export const deleteProduct = async (id) => Product.findByIdAndDelete(id);

// Without findByIdAndDelete you have to do both the find and the delete.
export const delete2Product = async (id) => {
    const product = await Product.findById(id);
    await product.remove();
    return product;
};

export const updateProduct = async (id, data) =>
    Product.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    });

export const createManyProducts = async (payloads) => {
    const createPromises = payloads.map((payload) => createProduct(payload));
    return Promise.allSettled(createPromises);
};
