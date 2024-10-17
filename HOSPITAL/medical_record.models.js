import mongoose from "mongoose"

const medicalrecordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    symptoms: {
        type: String,
        required: true
    },
    prescription: {
        type: String,
        required: true
    },
} ,{timestamps: true});

export const MedicalRecord = mongoose.model("MedicalRecord", medicalrecordSchema)