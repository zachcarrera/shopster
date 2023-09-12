import mongoose from 'mongoose';

const CheckoutSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "name is required"],
        minlength: [3, "name must be at least 3 characters"]
    },
    lastName: {
        type: String,
        required: [true, "name is required"],
        minlength: [3, "name must be at least 3 characters"]
    },
    email: {
        type: String,
        required: [true, "description is required"],
        minlength: [3, "description must be at least 3 characters"]
    },
    cardExp: {
        type: Date,
        required: [true, "image is required"],
        minlength: [3, "image must be a URL"]
    },
    cardNumber: {
        type: Number,
        required: [true, "card Number is required"],
        min: [15, "Price must be greater than 0 !"]
    },
    cardCVC: {
        type: Number,
        required: [true, "card CVC is required"],
        min: [3, "Price must be greater than 0 !"]
    },
    zipCode: {
        type: Number,
        required: [true, "zip code is required"],
        min: [5, "Zip code must be greater than 0 !"]
    },


}, {timestamps:true})

export const Checkout = mongoose.model('Checkout', CheckoutSchema);