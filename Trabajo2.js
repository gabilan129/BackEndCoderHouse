class Producto {
    constructor(titulo, descripcion, precio, thumbnail, code, stock) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.precio = precio;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }
  }
   class ProductManager {
    #products;
    #productDirPath;
    #productFilePath;
    #fileSystem;
    constructor() {
      this.#products = new Array();
      this.#productDirPath = "./file";
      this.#productFilePath = this.#productDirPath + "/Productos.json";
      this.#fileSystem = require("fs");
    }
     crearProducto = async (titulo, descripcion, precio, thumbnail, code, stock) => {
      let nuevoProducto = new Producto(
        titulo,
        descripcion,
        precio,
        thumbnail,
        code,
        stock
      );
      console.log(`Creando producto a registrar: ${JSON.stringify(nuevoProducto)}`);
       try {
        await this.#fileSystem.promises.mkdir(this.#productDirPath, { recursive: true });
         if (!this.#fileSystem.existsSync(this.#productFilePath)) {
          await this.#fileSystem.promises.writeFile(this.#productFilePath, "[]");
        }
         let productFile = await this.#fileSystem.promises.readFile(this.#productFilePath, "utf-8");
        console.log("Archivo JSON obtenido desde el archivo:");
        console.log(productFile);
         this.#products = JSON.parse(productFile);
        console.log("Productos encontrados:");
        console.log(this.#products);
         this.#products.push(nuevoProducto);
        console.log("Lista actualizada de productos:");
        console.log(this.#products);
         await this.#fileSystem.promises.writeFile(this.#productFilePath, JSON.stringify(this.#products, null, 2));
      } catch (error) {
        console.error(`Error creando nuevo producto: ${JSON.stringify(nuevoProducto)}, Detalle del error: ${error}`);
        throw Error(`Error creando nuevo producto: ${JSON.stringify(nuevoProducto)}, Detalle del error: ${error}`);
      }
    };
     productList = async () => {
      return "En construcción";
    };
  }
   module.exports = ProductManager;