
const express=require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const shortid= require("shortid")

const app=express();
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://vaibhav:shopping@cluster0.yrxsj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
useNewUrlParser:true,

useUnifiedTopology:true,
}).then(()=>console.log("connected to database ")).catch((err)=>console.log(err))

const Product= mongoose.model("products",
new mongoose.Schema({
_id: {type:String, default:shortid.generate},
title: String,
description: String,
image: String,
price: Number,
})
);

app.get("/api/products",async(req,res)=>{
 const products=await Product.find({});
  res.send(products);
});


app.post("/api/products", async (req,res)=>{
    const newProduct= new Product(req.body);
    const savedProduct=await newProduct.save()
    res.send(savedProduct);
});
app.delete("/api/products/:id", async(req,res)=>{
    const deletedProduct=await Product.findByIdAndDelete(req.params.id)
    res.send(deletedProduct);
}


)


app.listen(4000,()=>console.log("server running at port 4000"))
