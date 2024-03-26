import express from 'express'
import { createSaree } from '../controllers/sareeController'

const sareeRoutes = express.Router()

/**
 * @swagger
 * tags:
 *   name: Sarees
 */

/**
 * @swagger
 * /api/v1/sarees:
 *   post:
 *     tags: [Sarees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/models/productModels'
 *     responses:
 *       '201':
 *         description: A new saree created successfully
 *       '400':
 *         description: Bad request
 */

sareeRoutes.route('/').post(createSaree)

export default sareeRoutes
