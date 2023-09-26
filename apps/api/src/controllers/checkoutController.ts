import { Request, Response, NextFunction } from "express";
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
} from "../services/index.js";

import { ApiError } from "../utils/index.js";
import { ICheckout } from "../models/checkoutModel.js";
import { ObjectId } from "mongoose";

export const handleCreateCheckout = async (
    req: Request<{}, {}, ICheckout>,
    res: Response,
    next: NextFunction
) => {
    try {
        const checkout = await createCheckout(req.body);
        return res.json(checkout);
    } catch (error) {
        /*
         * Pass the error along to the next middleware function that happens before
         * the response. See the middleware being added in `main.js` with `app.use`.
         */
        return next(error);
    }
};

// _req naming convention means the param is currently unused.
export const handleGetAllCheckouts = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const checkout = await getAllCheckouts();
        return res.json(checkout);
    } catch (error) {
        return next(error);
    }
};

export const handleGetOneCheckout = async (
    req: Request<{ id: ObjectId }>,
    res: Response,
    next: NextFunction
) => {
    try {
        const checkout = await getOneCheckout(req.params.id);
        return res.json(checkout);
    } catch (error) {
        return next(error);
    }
};

export const handleDeleteCheckout = async (
    req: Request<{ id: ObjectId }>,
    res: Response,
    next: NextFunction
) => {
    try {
        const checkout = await deleteCheckout(req.params.id);
        return res.json(checkout);
    } catch (error) {
        return next(error);
    }
};

export const handleUpdateCheckout = async (
    req: Request<{ id: ObjectId }, {}, ICheckout>,
    res: Response,
    next: NextFunction
) => {
    try {
        const checkout = await updateCheckout(req.params.id, req.body);
        return res.json(checkout);
    } catch (error) {
        return next(error);
    }
};

export const handleCreateManyCheckouts = async (
    req: Request<{}, {}, ICheckout[]>,
    res: Response,
    next: NextFunction
) => {
    try {
        if (Array.isArray(req.body) === false) {
            throw new ApiError({
                message: "Request body must be an array.",
                statusCode: 400,
                cause: undefined,
            });
        }
        const settledCreateOutcomes = await createManyCheckouts(req.body);
        return res.json(settledCreateOutcomes);
    } catch (error) {
        return next(error);
    }
};
