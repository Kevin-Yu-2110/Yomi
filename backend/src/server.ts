import express from 'express'
import morgan from 'morgan'

const app = express();

//middleware
app.use(express.json()); //parse json
app.use(express.urlencoded({extended: true})); //parse url

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

export default app;