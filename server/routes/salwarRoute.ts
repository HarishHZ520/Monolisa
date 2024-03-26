import express from 'express'
import { createSaree } from '../controllers/sareeController'

const salwarRoutes = express.Router()

salwarRoutes.route('/').post(createSaree)

export default salwarRoutes
