import mongoose from 'mongoose';
import MongoDB from '../mongo.strategy.repository.js';

export const ordersCollectionName = 'orders';

export const ordersSchema = new mongoose.Schema({
    products: { type: Array, required: true },
    email: {type: String, required: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    adress:  {type: String, required: true},

});



class OrdersModel extends MongoDB {
    constructor(collection, schema) {
        super(collection, schema);
    }

    async createOrders(products, form) {
        const {email, name, lastName, adress} = form;
        try {
            const newOrder = await this.collection.create({
                products, 
                email,
                name,
                lastName,
                adress
            });

            return newOrder;
        } catch (error) {
            console.log('error getCarts mongoose', error);
        }
    }
  

}

export default new OrdersModel(ordersCollectionName, ordersSchema);


