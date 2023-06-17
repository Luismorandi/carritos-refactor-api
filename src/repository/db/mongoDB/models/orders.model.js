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

    async createOrders(items, form) {
        const {email, name, lastName, adress} = form;
        console.log(items, 'gasyhss');
        try {
            const newOrder = await this.collection.create({
                items, 
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


