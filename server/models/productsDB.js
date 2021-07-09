import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: String,
    selectedFile: String,
    price: Number,
    description: String,
    createdAt: {
        type: Date,
        default:new Date()
    }
});

const ProductDB = mongoose.model('ProductDB', productSchema);

export default ProductDB;