import express from 'express'
import { aliasTopSarees, createSaree, deleteSaree, getAllSarees, getSareeDetails, updateSaree } from '../controllers/sareeController'

const sareeRoutes = express.Router()

// /**
//  * @swagger
//  * tags:
//  *   name: Sarees
//  */

// /**
//  * @swagger
//  * /api/v1/sarees:
//  *   post:
//  *     tags: [Sarees]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/models/productModels'
//  *     responses:
//  *       '201':
//  *         description: A new saree created successfully
//  *       '400':
//  *         description: Bad request
//  */

sareeRoutes.route('/topSarees').get(aliasTopSarees, getAllSarees)
sareeRoutes.route('/').post(createSaree).get(getAllSarees)
sareeRoutes.route('/:id').get(getSareeDetails).patch(updateSaree).delete(deleteSaree)

export default sareeRoutes
