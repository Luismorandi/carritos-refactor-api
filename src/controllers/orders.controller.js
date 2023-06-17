import {  createOrder } from '../services/orders.services.js';

class Orders {
    constructor() {

    }
    async createOrder(req, res) {
        const data = await createOrder(req.body);
        return res.json(data);
    }



}

export default new Orders();

