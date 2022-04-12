import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { currentUser, errorHandler, NotFoundError } from '@modtickets/common';
import { createTicketRouter } from './routes/new-ticket';
import { ticketDetailsRouter } from './routes/ticket-details';
import { ticketsRouter } from './routes/tickets';
import { updateTicketRouter } from './routes/update-ticket';

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

app.use(createTicketRouter);
app.use(ticketDetailsRouter);
app.use(ticketsRouter);
app.use(updateTicketRouter);

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
