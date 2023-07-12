import {promises as fs } from "fs"

class ProductManager{
    constructor(){
        this.path = "./productos.txt"
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

    readProducts = async () => {
        let respuesta = await fs.readFile(this.path,"utf-8")
        return JSON.parse(respuesta)

    }

    getProducts = async () => {
        let respuestaDos = await this.readProducts()   
        return console.log(respuestaDos)
}

    getProductsById = async (id) => {
        let respuestaTres = await this.readProducts()   
        let filtro = respuestaTres.find(producto => producto.id === id)
        console.log(filtro)

        if(filtro === undefined){
            console.log("producto no encontrado")
        }

    }

    deleteProductById = async (id) => {
        let respuesta3 = await this.readProducts()
        let productoFiltrado = respuesta3.filter(productos => productos.id != id)
        console.log(productoFiltrado)
        await fs.writeFile(this.path,JSON.stringify(productoFiltrado))
    }

    updateProducts = async ({id,...producto}) => {
        await this.deleteProductById(id)
        let productOld = await this.readProducts()
        console.log(productOld)
        let productosMod = [
            {...producto,id},
            ...productOld
        ]
       await fs.writeFile(this.path,JSON.stringify(productosMod))
    }

}


const productos = new ProductManager()

productos.addProduct("producto1","el producto1",4000,"url","code1",500)
productos.addProduct("producto2","el producto2",3000,"url2","code2",1500)
productos.addProduct("producto3","el producto2",3000,"url2","code2",1500)

//productos.getProductsById(1) 
//productos.deleteProductById(2)

productos.updateProducts( {title: 'producto1',
description: 'el producto1',
price: 14000,
img: 'url',
code: 'code1',
stock: 500,
id: 1})