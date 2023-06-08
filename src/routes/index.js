import { Router } from 'express';
import ManageProducts from './manageProducts.route.js';
import ManageOrders from './manageOrders.route.js';

const mainRouter = Router();



mainRouter.use('/manage-products', ManageProducts);
mainRouter.use('/manage-orders', ManageOrders);


export default mainRouter;
