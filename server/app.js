const express = require("express");
const cors = require("cors");
const {v4:uuidv4} = require("uuid");
const stripe=require("stripe")("sk_test_51NXnFiSDUYZzjNyVSTqrkijJsKjE9i6f6ZGm9y6bOQSrzXWqnwOCzvwokXWXlNGjoJT7dgHdlf6V8wAfM5ibkC8000DfLN2ufa")

const app =express()
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("it is working ho")
})

app.post("/payment",(req,res)=>{
    console.log(req.body)
    res.send("working")
    const {pr,token}=req.body;
    const transactionkey = uuidv4();
    // return stripe.customers.create(
    //     {
    //         email:token.name,
    //         source:token.id
    //     })
    // .then((customer)=>{
    //     stripe.charges.create(
    //         {
    //             amount:pr.price,
    //             customer:customer.id,
    //             recipt_email:token.name,
    //             description:pr.name
    //         }).then((result)=>{
    //             res.json(result)
    //         }).catch((err)=>{
    //             console.log(err)
    //         })
    // })

})
app.listen(5000,()=>{
    console.log("server has been started")
})