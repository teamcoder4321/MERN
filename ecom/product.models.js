import mongoosee from "mongoose"

const productSchema = new mongoosee.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoosee.Schema.Types.ObjectId,
        ref:"Category",
        
    },
    quantity: {
        type: Number,
        required: true,
        required: true,
    },
    owner: {
        type: mongoosee.Schema.Types.ObjectId,
        ref:"User",
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        type: String
    },
}, {timestamp: true})

export const Product = mongoosee.model("Product", productSchema)