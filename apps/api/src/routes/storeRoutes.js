import express from 'express';

import {
  handleCreateStore,
  handleCreateManyStores,
  handleGetAllStores,
  handleGetOneStore,
  handleUpdateStore,
  handleDeleteStore,
} from '../controllers/index.js';

const storeRouter = express.Router();
/*
In main.js a prefix will be added: `/api/entities`
*/
storeRouter.post('/', handleCreateStore);
storeRouter.post('/many', handleCreateManyStores);
storeRouter.get('/', handleGetAllStores);
storeRouter.get('/:id', handleGetOneStore);
storeRouter.put('/:id', handleUpdateStore);
storeRouter.delete('/:id', handleDeleteStore);

export { storeRouter };