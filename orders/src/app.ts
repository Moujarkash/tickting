import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { currentUser, errorHandler, NotFoundError } from '@modtickets/common';
import { createOrderRouter } from './routes/new-order';
import { orderDetailsRouter } from './routes/order-details';
import { ordersRouter } from './routes/orders';
import { deleteOrderRouter } from './routes/delete-order';

const app = express();

app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    // secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(currentUser);

app.use(createOrderRouter);
app.use(orderDetailsRouter);
app.use(ordersRouter);
app.use(deleteOrderRouter);

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
