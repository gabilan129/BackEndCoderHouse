import {Router} from "express"
import CartManager from "../controllers/cartManager.js"
import { __dirname } from "../utils.js"

const manager=new CartManager(__dirname+'/database/carts.json')
const router =Router()

router.get("/carts",async(req,res)=>{
   const carrito=await manager.getCarts()
   res.json({carrito})
})

router.get("/carts/:cid",async(req,res)=>{
    const carritofound=await manager.getCartbyId(req.params)
    res.json({status:"success",carritofound})
})


router.post("/carts/", async (req, res) => {
    const newcart = await manager.addCart();
     res.json({ status: "success", newcart });
  });

  router.post("/carts/:cid/products/:pid", async (req, res) => {
    try {
      const cid = parseInt(req.params.cid);
      const pid = parseInt(req.params.pid);
  
      await manager.addProductToCart(cid, pid);
      res.json({ status: "success", message: "Product added to cart successfully." });
    } catch (error) {
      console.error("Error adding product to cart:", error);
      res.status(500).json({ status: "error", message: "Failed to add product to cart." });
    }
  });
  

  //DELETE
  //Debe eliminar el producto seleccionado
  router.delete('/carts/:cid/products/:pid', async (req, res) =>{
    try{

    } catch (error) {

    }
})

//Debe eliminar todos los productos del carrito
router.delete('/carts/:cid', async (req, res) =>{
  try{

  } catch (error) {

  }
})

//PUT
//Debe actualizar el carrito
router.put('/carts/:cid', async (req, res) =>{
  try{

  } catch (error) {

  }
})

//Debe actualizar solo la cantidad del producto
router.put('/carts/:cid/products/:pid', async (req, res) =>{
  try{

  } catch (error) {

  }
})

export default router