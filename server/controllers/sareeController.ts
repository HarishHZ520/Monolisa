import { Saree } from "../models/productModels";
import { Request, Response } from "express";
import HttpStatus from 'http-status-codes'

// export const getAllSarees = () => { }

export const createSaree = async (req: Request, res: Response) => {
    try {
        const newSaree = await Saree.create(req.body)
        res.status(HttpStatus.CREATED).json({
            status: 'success',
            data: {
                sarees: newSaree
            },
            error: null
        })
    } catch (error: any) {
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map((error: any) => error.message);
            const errorMessage = validationErrors.join(', ');
            return res.status(HttpStatus.BAD_REQUEST).json({
                status: 'failure',
                data: null,
                errorType: 'Validation error',
                error: errorMessage
            });
        } else if (error.code === 11000) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                status: 'failure',
                errorType: 'Duplicate key error',
                error: 'Duplicate Product Found. Provide different name'
            });
        } else {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: 'failure',
                errorType: 'Internal server error',
                error: 'Internal server error occurred'
            });
        }
    }
}