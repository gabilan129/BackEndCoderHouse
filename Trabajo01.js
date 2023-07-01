class ProductManager {
  constructor() {
    this.productos = [];
  }

  getProducts = () => {
    return this.productos;
  };

  addProducts = (title, description, price, thumbnail, code, stock) => {






if(!title || !description || !price || !thumbnail || !code || !stock ){
    console.error("Campos Faltantes")
}else{

    const ProductoFiltrado = this.productos.find(el =>el.code==code)
    if(!ProductoFiltrado){

        const newProducto = {
            title, description, price, thumbnail, code, stock
        } 
        return this.productos.push(newProducto);
    }else{
        console.error("el codigo del producto ya existe")
    }

  };
}


}


const productoMang = new ProductManager()
productoMang.addProducts("producto1","description1",1,"url","code1",100)
productoMang.addProducts("producto1","description1",2,"url","code1",50)


console.log(productoMang.getProducts())
