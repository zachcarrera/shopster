import express from "express";

import {
  handleCreateCheckout,
  handleCreateManyCheckouts,
  handleGetAllCheckouts,
  handleGetOneCheckout,
  handleUpdateCheckout,
  handleDeleteCheckout,
} from "../controllers/index";

const checkoutRouter = express.Router();
/*
In main.js a prefix will be added: `/api/entities`
*/
checkoutRouter.post("/new", handleCreateCheckout);
checkoutRouter.post("/many", handleCreateManyCheckouts);
checkoutRouter.get("/", handleGetAllCheckouts);
checkoutRouter.get("/:id", handleGetOneCheckout);
checkoutRouter.put("/:id", handleUpdateCheckout);
checkoutRouter.delete("/:id", handleDeleteCheckout);

export { checkoutRouter };
