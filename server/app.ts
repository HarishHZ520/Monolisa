import express from 'express';
import fs from 'fs';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import router from './routes/routes';

const app = express()

/////   MIDDLEWARES /////
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json());

/////   SWAGGER /////
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Monolisa',
            version: '1.0.0',
            description: 'Ecommerce APIs'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local Server'
            }
        ]
    },
    apis: ['./routes/sareeRoute.ts', './routes/salwarRoute.ts', './routes/sandalRoute.ts']
};

const specs = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/v1', router);

export default app