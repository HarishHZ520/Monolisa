import { Saree } from "../models/productModels";
import { NextFunction, Request, Response } from "express";
import HttpStatus from 'http-status-codes'

const APIFeatures = require('./../helpers/ApiFeatures.js');

export const aliasTopSarees = async (req: Request, res: Response, next: NextFunction) => {
    req.query.limit = '4'
    req.query.sort = '-rating price'
    req.query.fields = 'itemName price inStock rating'
    next()
}

export const getAllSarees = async (req: Request, res: Response) => {
    try {
        // const features = filter(Saree.find(), req.query)
        //     .sort(req.query)
        //     .limitFields(req.query)
        //     .paginate(req.query);
        // const Sarees = await features

        const features = new APIFeatures(Saree.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const Sarees = await features.query;
        res.status(HttpStatus.OK).json({
            status: 'success',
            count: Sarees.length,
            data: {
                sarees: Sarees
            },
            error: null
        })
    } catch (error: any) {
        res.status(HttpStatus.NOT_FOUND).json({
            status: 'failure',
            data: null,
            error: error.message
        })
    }
}

export const getSareeDetails = async (req: Request, res: Response) => {
    try {
        const SareeDetails = await Saree.findById(req.params.id)
        res.status(HttpStatus.OK).json({
            status: 'success',
            data: {
                saree: SareeDetails
            },
            error: null
        })
    } catch (error: any) {
        res.status(HttpStatus.NOT_FOUND).json({
            status: 'failure',
            data: null,
            error: error.message
        })
    }
}

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

export const updateSaree = async (req: Request, res: Response) => {
    try {
        const SareeUpdate = await Saree.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(HttpStatus.OK).json({
            status: 'success',
            data: {
                saree: SareeUpdate
            },
            error: null
        })
    } catch (error: any) {
        res.status(HttpStatus.NOT_FOUND).json({
            status: 'failure',
            data: null,
            error: error.message
        })
    }
}

export const deleteSaree = async (req: Request, res: Response) => {
    try {
        await Saree.findByIdAndDelete(req.params.id)
        res.status(HttpStatus.NO_CONTENT).json({
            status: 'success',
            data: {},
            error: null
        })
    } catch (error: any) {
        res.status(HttpStatus.NOT_FOUND).json({
            status: 'failure',
            data: null,
            error: error.message
        })
    }
}