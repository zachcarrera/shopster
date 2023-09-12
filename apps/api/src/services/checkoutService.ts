/*
This service is NOT concerned with req and res, it doesn't know or care about
it.
*/

import { Checkout } from '../models/index.js';

export const createCheckout = async (data) => {
    const newCheckout = await Checkout.create(data);
    return newCheckout;
};

export const getAllCheckouts = async () => Checkout.find();

export const getOneCheckout = async (id) => Checkout.findById(id);

export const deleteCheckout = async (id) => Checkout.findByIdAndDelete(id);

// Without findByIdAndDelete you have to do both the find and the delete.
export const delete2Checkout = async (id) => {
    const Checkout = await Checkout.findById(id);
    await Checkout.remove();
    return Checkout;
};

export const updateCheckout = async (id, data) =>
    Checkout.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    });

export const createManyCheckouts = async (payloads) => {
    const createPromises = payloads.map((payload) => createCheckout(payload));
    return Promise.allSettled(createPromises);
};