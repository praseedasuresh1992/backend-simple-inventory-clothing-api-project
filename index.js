const express=require('express')
const app=express()
const port=3000
const productroutes=require("./routes/productroutes")

app.use(express.json())
app.get("/",(req,res)=>{res.send("Inventory API is running")})
// miidleware to logrequest method and url
app.use((req,res,next)=>{console.log(`Request Method:${req.method} and Request URL:${req.url}`)
next()})

app.use("/",productroutes)





app.listen(port,()=>console.log(`App running on  http://localhost:${port}`))