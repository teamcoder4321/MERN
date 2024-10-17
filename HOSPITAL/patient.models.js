import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
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
    bloodGroup: {
        type: String, 
        enum: ["O+","O-","A+","A-","B+","B-","AB+","AB-"],
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
    status: {
        type: String,
        enum: ["ACTIVE","INACTIVE"],
        default: "ACTIVE"
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
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
    pincode: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
} ,{timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema)