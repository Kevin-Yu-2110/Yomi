//mounts all private routers onto apiRouter

import express from 'express'
import dummyRouter from './dummyRouter.js'

const apiRouter = express.Router();
apiRouter.use(dummyRouter)

export default apiRouter