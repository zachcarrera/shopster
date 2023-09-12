/*
Separation of concerns:
  The controller is only concerned with handling the request and the response,
  everything is separable logic so it's decoupled and easily reusable.
*/

import {
    createCheckout,
    getAllCheckouts,
    getOneCheckout,
    deleteCheckout,
    updateCheckout,
    createManyCheckouts,
} from '../services/index.js';

import { ApiError } from '../utils/index.js';

export const handleCreateCheckout = async (req, res, next) => {
    try {
        const checkout = await createCheckout(req.body);
        return res.json(checkout);
    } catch (error) {
        /*
        Pass the error along to the next middleware function that happens before
        the response. See the middleware being added in `main.js` with `app.use`.
        */
        return next(error);
    }
};

// _req naming convention means the param is currently unused.
export const handleGetAllCheckouts = async (_req, res, next) => {
    try {
        const checkout = await getAllCheckouts();
        return res.json(checkout);
    } catch (error) {
        return next(error);
    }
};

export const handleGetOneCheckout = async (req, res, next) => {
    try {
        const checkout = await getOneCheckout(req.params.id);
        return res.json(checkout);
    } catch (error) {
        return next(error);
    }
};

export const handleDeleteCheckout = async (req, res, next) => {
    try {
        const checkout = await deleteCheckout(req.params.id);
        return res.json(checkout);
    } catch (error) {
        return next(error);
    }
};

export const handleUpdateCheckout = async (req, res, next) => {
    try {
        const checkout = await updateCheckout(req.params.id, req.body);
        return res.json(checkout);
    } catch (error) {
        return next(error);
    }
};

export const handleCreateManyCheckouts = async (req, res, next) => {
    try {
        if (Array.isArray(req.body) === false) {
            throw new ApiError({ message: 'Request body must be an array.', statusCode: 400 });
        }
        const settledCreateOutcomes = await createManyCheckouts(req.body);
        return res.json(settledCreateOutcomes);
    } catch (error) {
        return next(error);
    }
};