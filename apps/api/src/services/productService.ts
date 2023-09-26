/*
This service is NOT concerned with req and res, it doesn't know or care about
it.
*/

import { ObjectId } from "mongoose";
import { Product, IProduct } from "../models/index";

export const createProduct = async (data: IProduct) => {
    const newProduct = await Product.create(data);
    return newProduct;
};

export const getAllProducts = async () => Product.find();

export const getAllProductsPriceSortedAsc = async () =>
    Product.find().sort({ price: "asc" });

export const getAllProductsPriceSortedDesc = async () =>
    Product.find().sort({ price: "desc" });

export const getOneProduct = async (id: ObjectId) => Product.findById(id);

export const deleteProduct = async (id: ObjectId) =>
    Product.findByIdAndDelete(id);

export const updateProduct = async (id: ObjectId, data: IProduct) =>
    Product.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    });

export const createManyProducts = async (payloads: IProduct[]) => {
    const createPromises = payloads.map((payload) => createProduct(payload));
    return Promise.allSettled(createPromises);
};
