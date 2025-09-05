import express from 'express'
import { dummyController } from '../controllers/dummyController.js'

const router = express.Router();

router.get('/hello', dummyController.hello);
router.get('/error', dummyController.error);

export default router

