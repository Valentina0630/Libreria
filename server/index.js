const express =require('express');
const app =express();
const cors =require("cors");
const axios=require("axios");
const bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (rep,res)=>{
        let config = {
            method: "GET",
            //maxBodyLength: Infinity,
            url: "https://api.jsonbin.io/v3/b/6654d652acd3cb34a84e8a8b",
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': '$2a$10$/aFDbFN3GK7KuDegqa8fmeFkmRR/TdLfj0B2gX4NSb5Kactr4HZEG'
            }
        };
        axios(config)
            .then(result => {
                res.send(result.data.record)
            })
    //res.send("saludando desde el backend")
})

const user= require("./controller/userController");
const send = require('send');
app.use("/Sign-Up", user.register);
app.use("/Login", user.login);

const PORT = 3001
app.listen(PORT,()=>{
    console.log("servidor corriendo en el puerto ", PORT)
})
