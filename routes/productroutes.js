const express=require("express")
const router=express.Router()
const productcontroller=require("../controllers/productcontrollers")

router.get("/viewProducts",productcontroller.getproduct)
router.post("/addProducts",productcontroller.addproduct)
router.put("/updateProducts/:id",productcontroller.updateproduct)
router.patch("/updateProductspartially/:id",productcontroller.partialupdateproduct)
router.delete("/deleteProducts/:id",productcontroller.deleteproduct)


module.exports=router