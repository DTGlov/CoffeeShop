import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/products.js';
import userRoutes from './routes/users.js';
import adminRoutes from './routes/admin.js'


const app = express();
dotenv.config();

app.use(express.json({limit:"30mb",extended:true}));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

//every route in postRoutes will start with /products
app.use('/products', postRoutes);
app.use('/users', userRoutes);
app.use('/admin', adminRoutes);


const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);