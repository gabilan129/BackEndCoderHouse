class ProductManager {
  constructor() {
    this.productos = [];
  }

  getProducts = () => {
    return this.productos;
  };

  addProducts = (title, description, price, thumbnail, code, stock) => {
    const newProducto = {
        title, description, price, thumbnail, code, stock
    } 
    return this.productos.push(newProducto);
  };
}


const productoMang = new ProductManager()
productoMang.addProducts("producto1","description1",1,"url","code1",100)
console.log(productoMang.getProducts())