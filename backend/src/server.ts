import express, { Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import apiRouter from './routes/index.js'

const app = express();

app.use(express.json()); //Content-type: application/json

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

app.use('/api', apiRouter);

//error handling - after router

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error("Error handler caught:", err.message);
  res.status(500).json({ error: err.message });
});

export default app;