// eslint-disable-next-line no-unused-vars
// import { request, response } from "express";
import { Request, Response, NextFunction } from "express";

import { normalizeErrors } from "../utils/index.js";

/*
These error util functions are added as middleware in `api/main.ts` via
`app.use`.
*/

/**
 * @see https://expressjs.com/en/guide/error-handling.html
 */
export const errorLogger = (
    error: Error,
    _req: Request,
    _res: Response,
    next: NextFunction
) => {
    console.error(error);
    return next(error);
};

/**
 * Catch-all error handler. Any error handling that needs to happen for
 * all errors can happen here.
 * @see [Section: 'The default error handler'](https://expressjs.com/en/guide/error-handling.html)
 */
export const errorHandler = (
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    if (res.headersSent) {
        return next(error);
    }

    // For common errors that can be handled at a high-level. For errors that need to be handled more specifically with
    // local information (info closer to where the error happens), those should be handled locally instead of passed to
    // `next()` and then end up here.
    const normalizedError = normalizeErrors(error);
    return res.status(normalizedError?.statusCode || 500).json(normalizedError);
};
