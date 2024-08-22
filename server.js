import express from "express";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
app.use(express.json());

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on  port ${process.env.PORT}`);
})
