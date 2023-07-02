class ProductManager {
  constructor() {
    this.productos = [];
  }

  
  getProducts = () => {
      return this.productos;
    };

    generarId = () => {
      const contar = this.productos.length;
      if (contar == 0) {
        return 1;
      } else {
        return contar + 1;
      }
    };
    
  addProducts = (title, description, price, thumbnail, code, stock) => {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Campos Faltantes");
    } else {
      const ProductoFiltrado = this.productos.find((el) => el.code == code);
      const id = this.generarId();
      if (!ProductoFiltrado) {
        const newProducto = {
          id: id,
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        };
        return this.productos.push(newProducto);
      } else {
        console.error("el codigo del producto ya existe");
      }
    }
  };
}

const productoMang = new ProductManager();
productoMang.addProducts("producto1", "description1", 1, "url", "code1", 100);
productoMang.addProducts("producto1", "description1", 2, "url", "code2", 200);

console.log(productoMang.getProducts());
