/*
This service is NOT concerned with req and res, it doesn't know or care about
it.
*/

import { Store } from '../models/index.js';

export const createStore = async (data) => {
    const newStore = await Store.create(data);
    return newStore;
};

export const getAllStores = async () => Store.find();

export const getOneStore = async (id) => Store.findById(id);

export const deleteStore = async (id) => Store.findByIdAndDelete(id);

// Without findByIdAndDelete you have to do both the find and the delete.
export const delete2Store = async (id) => {
    const store = await Store.findById(id);
    await store.remove();
    return store;
};

export const updateStore = async (id, data) =>
    Store.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    });

export const createManyStores = async (payloads) => {
    const createPromises = payloads.map((payload) => createStore(payload));
    return Promise.allSettled(createPromises);
};