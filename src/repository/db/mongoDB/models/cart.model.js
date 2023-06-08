import mongoose from 'mongoose';
import MongoDB from '../mongo.strategy.repository.js';

export const cartCollectionName = 'cart';

export const cartSchema = new mongoose.Schema({
    products: { type: Array, required: true },
    isActive: {type: Boolean, required: true},
    date: {type: Date, required: false},
    total:  {type: Number, required: false},

});



class CartModel extends MongoDB {
    constructor(collection, schema) {
        super(collection, schema);
    }


    async addProductsToCart(products) {

        try {
            let addedProducts = [];
            for (const product of products) {


                const { name, principalPrice, price, thumbnail, stock, stockPrice } = product;
                const newProduct = await this.collection.create({
                    name,
                    principalPrice,
                    price,
                    thumbnail,
                    stock,
                    stockPrice,
                });

                addedProducts.push(newProduct);
            }

            return {
                msg: 'Producto/s agregado/s con exito',
                addedProducts,
            };
        } catch (err) {
            console.log('error addProducts mongoose', err);

        }
    }


    async deleteProductCart( productId) {
        try {
            const productDelete = await this.collection.findByIdAndDelete(productId);

            return {
                msg: 'Producto eliminado',
                productDelete,
            
            };
        } catch (err) {
            console.log('error deleteProduct mongoose', err);

        }
    }

    async deleteCart( cartId) {
        try {
            const productDelete = await this.collection.findByIdAndDelete(cartId);

            return {
                msg: 'Producto eliminado',
                productDelete,
            
            };
        } catch (err) {
            console.log('error deleteProduct mongoose', err);

        }
    }

}

export default new CartModel(cartCollectionName, cartSchema);


