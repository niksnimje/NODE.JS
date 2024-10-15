const express=require("express")
const app=express()

app.get("/home",(req,res)=>{
    res.send("Hello Bhai Jag Gaya !!!  ")
})

app.listen(8000,()=>{
    console.log("App Is runnn")
})