import express from 'express'
import dummyRouter from './dummyRoutes.js'

const apiRouter = express.Router();
apiRouter.use(dummyRouter)

export default apiRouter