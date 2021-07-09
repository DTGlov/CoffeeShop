import express from 'express';

import { getProducts,createProduct,updateProduct,deleteProduct } from '../controllers/products.js';

const router = express.Router();

//this route will be accessed as localhost:5000/products
router.get('/', getProducts); //getting the product
router.post('/', createProduct); //creating the product
router.patch('/:id', updateProduct); //editing the product
router.delete('/:id', deleteProduct); //deleting the product

export default router; 