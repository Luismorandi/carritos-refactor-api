import { Router } from 'express';

import Products from '../controllers/products.controller.js';



const ManageProducts = Router();

ManageProducts.get('/', Products.getProducts);
ManageProducts.post('/add-products', Products.addProduct);
ManageProducts.delete('/delete-product/:productId', Products.deleteProduct);



export default ManageProducts;
