const express = require("express");
const app = express();
const PORT = process.env.PORT||4000;

app.get("/home",(req,res)=>{
    res.send("home");
})

const start = () =>{
    try {
        app.listen(PORT,()=>{
            console.log("localhost");
        })
    } catch (error) {
        console.log(error);
    }
}

start();
