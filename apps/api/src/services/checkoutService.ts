/*
This service is NOT concerned with req and res, it doesn't know or care about
it.
*/

import { ObjectId } from "mongoose";
import { Checkout, ICheckout } from "../models/index";

export const createCheckout = async (data: ICheckout) => {
    const newCheckout = await Checkout.create(data);
    return newCheckout;
};

export const getAllCheckouts = async () => Checkout.find();

export const getOneCheckout = async (id: ObjectId) => Checkout.findById(id);

export const deleteCheckout = async (id: ObjectId) =>
    Checkout.findByIdAndDelete(id);

export const updateCheckout = async (id: ObjectId, data: ICheckout) =>
    Checkout.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    });

export const createManyCheckouts = async (payloads: ICheckout[]) => {
    const createPromises = payloads.map((payload) => createCheckout(payload));
    return Promise.allSettled(createPromises);
};
