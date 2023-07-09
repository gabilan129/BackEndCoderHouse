const ProductManager = require("./Trabajo2")

let productManager = new ProductManager()
console.log(productManager)

let persistirProducto = async () => {
 let product = await productManager.crearProducto("producto1","descripcion1",30,"url","code1",50)
console.log(product)
}

persistirProducto()