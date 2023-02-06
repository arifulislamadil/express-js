const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("I'm From Home Route");
    res.end()
})
app.post("/", (req,res)=>{
    res.send("I post request method to home route");
    res.end()
})
app.put("/", (req,res)=>{
    res.send("I put method to home route");
    res.end()
})
app.delete("/", (req,res)=>{
    res.send("I delete method to home route");
    res.end()
})

module.exports=app;