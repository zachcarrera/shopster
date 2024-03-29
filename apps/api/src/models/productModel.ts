import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
    name: string;
    description: string;
    image: string;
    price: number;
    inStock: boolean;
}

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
            minlength: [3, "name must be at least 3 characters"],
        },
        description: {
            type: String,
            required: [true, "description is required"],
            minlength: [3, "description must be at least 3 characters"],
        },
        image: {
            type: String,
            required: [true, "image is required"],
            minlength: [3, "image must be a URL"],
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
            min: [0, "Price must be greater than 0 !"],
        },
        inStock: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
