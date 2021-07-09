// this gives us access to the real Model
import mongoose from "mongoose";
import ProductDB from "../models/productsDB.js";

// getting products from the DB
export const getProducts = async (req, res) => {
  try {
    // this is an async action to get products from the DB
    const products = await ProductDB.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//creating a product
export const createProduct = async (req, res) => {
  //for post request we have access to the body
  const product = req.body;

  //adding the newly created product to the Database
  const newProduct = new ProductDB(product);
  try {
    //saving the new created product to  the Database
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  //extracting the id
  const { id: _id } = req.params;
  const product = req.body

  //checking the id is a mongoose id
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

 
  const updatedProduct = await ProductDB.findByIdAndUpdate(_id, {...product,_id}, { new: true })
  
  res.json(updatedProduct);
  
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  //checking the id is a mongoose id
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");
  
  await ProductDB.findByIdAndRemove(id);
  return res.json('Product Deleted Successfully')
}