import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import './configs/index.js';

import { productRouter, checkoutRouter } from './routes/index.js';
import * as middleware from './middleware/index.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', productRouter);
app.use('/api/checkouts', checkoutRouter);
app.use(middleware.errorLogger);
app.use(middleware.errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Api listening on port ${process.env.PORT}.`);
});