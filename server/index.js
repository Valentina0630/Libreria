const express =require('express');
const app =express();
const cors =require("cors");
const axios = require("axios");
const bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (rep,res)=>{
    res.send("saludando desde el backend")
})

const user= require("./controller/userController");
app.use("/Sign-Up", user.register);
//app.use("/Login", user.login);

const PORT = 3001
app.listen(PORT,()=>{
    console.log("servidor corriendo en el puerto ", PORT)
})

