import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: [true, 'This product must have a name'],
        unique: true
    },
    price: {
        type: Number,
        required: [true, 'This product must have a price']
    },
    rating: Number,
    description: String,
    manufacturedBy: String,
    manufacturerRating: Number,
    shippingFrom: String,
    inStock: Number,
})

export const Saree = mongoose.model('Sarees', productSchema)
export const Salwar = mongoose.model('Salwars', productSchema)
export const Saandal = mongoose.model('Sandals', productSchema)