import express from 'express';

import {
  handleCreateProduct,
  handleCreateManyProducts,
  handleGetAllProducts,
  handleGetOneProduct,
  handleUpdateProduct,
  handleDeleteProduct,
} from '../controllers/index.js';

const productRouter = express.Router();
/*
In main.js a prefix will be added: `/api/entities`
*/
productRouter.post('/new', handleCreateProduct);
productRouter.post('/many', handleCreateManyProducts);
productRouter.get('/', handleGetAllProducts);
productRouter.get('/:id', handleGetOneProduct);
productRouter.put('/:id', handleUpdateProduct);
productRouter.delete('/:id', handleDeleteProduct);

export { productRouter };