import express from 'express'
import { createSaree } from '../controllers/sareeController'

const sandalRoutes = express.Router()

sandalRoutes.route('/').post(createSaree)

export default sandalRoutes
