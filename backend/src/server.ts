import express from 'express'
import morgan from 'morgan'
import apiRouter from './routers/index.js'
import authRouter from './routers/authRouter.js'
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(express.json()); //Content-type: application/json

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

//mount
app.use('/api', authRouter);

//TODO: auth validation middlware here

app.use('/api', apiRouter);

//error handler at the bottom
app.use(errorHandler)

export default app;