import express from 'express';
import sareeRoutes from './sareeRoute';
import salwarRoutes from './salwarRoute';
import sandalRoutes from './sandalRoute';

const router = express.Router();

router.use('/sarees', sareeRoutes);
router.use('/salwars', salwarRoutes);
router.use('/sandals', sandalRoutes);

export default router;