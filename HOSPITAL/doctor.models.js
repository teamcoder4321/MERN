import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        enum: ["MALE","FEMALE","TRANSGENDER"],
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    hospital:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["ACTIVE","INACTIVE"],
        default: "INACTIVE"
    },
    qualification: {
        type: String,
        required: true
    },
} ,{timestamps: true});

export const Doctor = mongoose.model("Doctor", doctorSchema)
