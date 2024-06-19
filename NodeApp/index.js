import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    res.send(`<h1>THis is working fine</h1>`)
})

app.listen(port, ()=>{
    console.log(`This is working on ${port}`);
})