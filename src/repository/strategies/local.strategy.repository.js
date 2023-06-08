
 
class LocalStrategy{
    constructor(){
    }

    products= [
        {
            'nombre': 'Cuadro 0',
            'precioPrincipal': 5731,
            'precio': 5731,
            'cantidad': 51,
            'cantidadPrecio': 51,
            'id': 0
        },
        {
            'nombre': 'Cuadro 1',
            'precioPrincipal': 3278,
            'precio': 3278,
            'cantidad': 19,
            'cantidadPrecio': 19,
            'id': 1
        },
    // Resto de los elementos...
    ];
 
    getProducts(){      
        return this.products;
    }

    addProducts(items){
        const products = [... this.products, ...items]; 
        return products;

    }

    deleteProduct(id){
        const products = this.products.filter(product => product.id !== parseInt(id));
        return products;
    }

   
}

export default new LocalStrategy();