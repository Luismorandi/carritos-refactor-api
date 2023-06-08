import { addProducts, getproducts, deleteProduct } from '../services/products.services.js';

class Products {
    constructor() {

    }
    async getProducts(req, res) {
        const data = await getproducts();
        return res.json(data);
    }

    async addProduct(req, res) {
        const product = req.body;
        const products = await addProducts(product);
        return res.json(products);
    }

    async deleteProduct(req, res) {
        const productId = req.params.productId;
        const products = await deleteProduct(productId);
        return res.json(products);
    }



}

export default new Products();

