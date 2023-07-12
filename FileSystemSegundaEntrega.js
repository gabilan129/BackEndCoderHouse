import {promises as fs } from "fs"

class ProductManager{
    constructor(){
        this.path = "./productos.json"
        this.producto = []
    }

    static id = 0 

    addProduct = async (title,description,price,img,code,stock) => {

    ProductManager.id++

    let newProduct = {
        title,
        description,
        price,
        img,
        code,
        stock,
        id:ProductManager.id
        }

        this.producto.push(newProduct)

        
    await fs.writeFile(this.path,JSON.stringify(this.producto))
    

    }

}


const productos = new ProductManager

productos.addProduct("producto1","el producto1",4000,"url","code1",500)
productos.addProduct("producto2","el producto3",4500,"url","code2",100)