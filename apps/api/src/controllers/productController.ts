import { Request, Response, NextFunction } from "express";
/*
Separation of concerns:
  The controller is only concerned with handling the request and the response,
  everything is separable logic so it's decoupled and easily reusable.
*/

import {
    createProduct,
    getAllProducts,
    getAllProductsPriceSortedAsc,
    getAllProductsPriceSortedDesc,
    getOneProduct,
    deleteProduct,
    updateProduct,
    createManyProducts,
} from "../services/index.js";

import { ApiError } from "../utils/index.js";

export const handleCreateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const product = await createProduct(req.body);
        return res.json(product);
    } catch (error) {
        /*
        Pass the error along to the next middleware function that happens before
        the response. See the middleware being added in `main.js` with `app.use`.
        */
        return next(error);
    }
};

// _req naming convention means the param is currently unused.
export const handleGetAllProducts = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const product = await getAllProducts();
        return res.json(product);
    } catch (error) {
        return next(error);
    }
};

export const handleGetAllProductsPriceSortedAsc = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const products = await getAllProductsPriceSortedAsc();
        return res.json(products);
    } catch (error) {
        return next(error);
    }
};

export const handleGetAllProductsPriceSortedDesc = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const products = await getAllProductsPriceSortedDesc();
        return res.json(products);
    } catch (error) {
        return next(error);
    }
};

export const handleGetOneProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const product = await getOneProduct(req.params.id);
        return res.json(product);
    } catch (error) {
        return next(error);
    }
};

export const handleDeleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const product = await deleteProduct(req.params.id);
        return res.json(product);
    } catch (error) {
        return next(error);
    }
};

export const handleUpdateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const product = await updateProduct(req.params.id, req.body);
        return res.json(product);
    } catch (error) {
        return next(error);
    }
};

export const handleCreateManyProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (Array.isArray(req.body) === false) {
            throw new ApiError({
                message: "Request body must be an array.",
                statusCode: 400,
            });
        }
        const settledCreateOutcomes = await createManyProducts(req.body);
        return res.json(settledCreateOutcomes);
    } catch (error) {
        return next(error);
    }
};
