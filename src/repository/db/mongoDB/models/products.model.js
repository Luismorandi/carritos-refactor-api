import mongoose from 'mongoose';
import MongoDB from '../mongo.strategy.repository.js';


export const productsCollectionName = 'products';

export const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    principalPrice: { type: Number, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    stock: { type: Number, required: true },
    stockPrice: { type: Number, required: true },


});




class ProductsModel extends MongoDB {
    constructor(collection, schema) {
        super(collection, schema);
    }

    async getProducts() {
        try {
            const doc = await this.collection.find();
            return doc;
        } catch (error) {
            console.log('error getProducts mongoose', error);
        }
    }
    async getProductById(id) {
        try {
            const doc = await this.collection.findById(id);
            return doc;
        } catch (error) {
            console.log('error getProductById mongoose', error);
        }
    }


    async addProducts(products) {

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


    async deleteProduct( productId) {
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

    async updateProduct( update, productId) {
        try {
            const productUpdate = await this.collection.findByIdAndUpdate(productId, update, { new: true });

            return {
                msg: 'Precio del producto actualizado',
                productUpdate,
            
            };
        } catch (err) {
            console.log('error updateProduct mongoose', err);

        }
    }

  


}

export default new ProductsModel('products', productsSchema);


