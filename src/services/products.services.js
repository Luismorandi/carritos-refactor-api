import ProductsModel from '../repository/db/mongoDB/models/products.model.js';


const products = ProductsModel;


export const getproducts =  async () => {
    const data = await products.getProducts();
    return data;
};

export const addProducts= async (items) => {
    const data = await  products.addProducts(items);
    return data;
};

export const deleteProduct= async (id) => {
    const data = await products.deleteProduct(id);
    return data;
};



