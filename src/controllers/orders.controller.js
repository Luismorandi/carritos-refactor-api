import {  createOrder } from '../services/orders.services.js';

class Orders {
    constructor() {

    }
    async createOrder(req, res) {
        console.log(req.body);
        const data = await createOrder(req.body);
        return res.json(data);
    }



}

export default new Orders();

