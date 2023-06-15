import ProductsModel from '../repository/db/mongoDB/models/products.model.js';
import OrdersModel from '../repository/db/mongoDB/models/orders.model.js';


const products = ProductsModel;
const orders = OrdersModel;
 

export const createOrder =  async ({items, form}) => {
    
    const data = await orders.createOrders(items, form);


    for(const item of items){
        const restCount = (parseInt(item.stockPrice) - parseInt(item.stock)); 
        const percentage=  (restCount/ item.stockPrice) * 100;
        const newPrice = item.price +(item.price *percentage/100); 
        const newStock = item.stock - 1;


        const update= {
            price: newPrice,
            stock: newStock
        };

        await products.updateProduct(update, item._id);
    } 
    
    return {
        data
        
    };
};




