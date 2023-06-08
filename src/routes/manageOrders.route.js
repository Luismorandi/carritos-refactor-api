import { Router } from 'express';

import Orders from '../controllers/orders.controller.js';



const ManageOrders = Router();

ManageOrders.post('/', Orders.createOrder);




export default ManageOrders;
