const express= require("express");

const app= express();


app.get("/search",(req,res)=>{
    res.send("welcome to my server3");
})

app.listen(4100,async()=>{
   console.log(`server is running on port ${4100}`)
})