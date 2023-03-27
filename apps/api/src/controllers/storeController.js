/*
Separation of concerns:
  The controller is only concerned with handling the request and the response,
  everything is separable logic so it's decoupled and easily reusable.
*/

import {
    createStore,
    getAllStores,
    getOneStore,
    deleteStore,
    updateStore,
    createManyStores,
} from '../services/index.js';

import { ApiError } from '../utils/index.js';

export const handleCreateStore = async (req, res, next) => {
    try {
        const store = await createStore(req.body);
        return res.json(store);
    } catch (error) {
        /*
        Pass the error along to the next middleware function that happens before
        the response. See the middleware being added in `main.js` with `app.use`.
        */
        return next(error);
    }
};

// _req naming convention means the param is currently unused.
export const handleGetAllStores = async (_req, res, next) => {
    try {
        const store = await getAllStores();
        return res.json(store);
    } catch (error) {
        return next(error);
    }
};

export const handleGetOneStore = async (req, res, next) => {
    try {
        const store = await getOneStore(req.params.id);
        return res.json(store);
    } catch (error) {
        return next(error);
    }
};

export const handleDeleteStore = async (req, res, next) => {
    try {
        const store = await deleteStore(req.params.id);
        return res.json(store);
    } catch (error) {
        return next(error);
    }
};

export const handleUpdateStore = async (req, res, next) => {
    try {
        const store = await updateStore(req.params.id, req.body);
        return res.json(store);
    } catch (error) {
        return next(error);
    }
};

export const handleCreateManyStores = async (req, res, next) => {
    try {
        if (Array.isArray(req.body) === false) {
            throw new ApiError({ message: 'Request body must be an array.', statusCode: 400 });
        }
        const settledCreateOutcomes = await createManyStores(req.body);
        return res.json(settledCreateOutcomes);
    } catch (error) {
        return next(error);
    }
};