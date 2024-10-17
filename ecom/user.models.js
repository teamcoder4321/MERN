import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    usearname: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
     },
     password: {
        type: String,
        required: true
     },
     confirm_password: {
        type: String,
        required: true
     },
     role: {
        type: String,
        default: "user"
     },
     name: {
        type: String,
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
     country: {
        type: String,
        required: true
     },
     postalCode: {
        type: String,
        required: true
     },
},
{ timestamp: true}
);

export default mongoose.model("User", userSchema)