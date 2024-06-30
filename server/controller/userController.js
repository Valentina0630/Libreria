// const fs= require('fs').promises;
// const path=require('path');
// const userFilePath=path.join(__dirname, '../../src/componentes/body/usuariosRegistrados.json');
// const controller={
//     register:async function(req,res){
//         try{
//             const usersData=await fs.readFile(userFilePath, 'utf-8');
//             const users =JSON.parse(usersData);

//             const ultimo =users.length;
//             const usuarioNuevo={
//                 id:ultimo+1,
//                 identificacion:req.body.identificacion,
//                 nombres:req.body.nombres,
//                 apellidos:req.body.apellidos,
//                 email:req.body.email,
//                 direccion:req.body.direccion,
//                 telefono: req.body.telefono,
//                 fechaNacimiento: req.body.fechaNacimiento,
//                 departamento:req.body.departamento,
//                 municipio:req.body.municipio,
//                 passWord: req.body.password,
//                 estado: "activo",
//                 rol: "Usuario",
//                 fecha_creacion: new Date(),
//             };
//             for(x of users){
//                 if(
//                     x.email===req.body.email || 
//                     x.identificacion ===req.body.identificacion
//                 ){
//                     res.status(400).send("El email ya existe");
//                     return;
//                 }
//             }

//             users.push(usuarioNuevo);

//             await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));

//             res.status(200).send("Usuario creado con éxito");
//         }catch(error){
//             console.error("Error al procesar el registro:", error);
//             res.status(500).send("Error interno del servidor");
//         }
//     },
//     login: async function (req,res){
//         try{
//             const usersData=await fs.readFile(userFilePath, 'utf-8');
//             const users =JSON.parse(usersData);

//             for(x of users){
//                 if(
//                     x.email===req.body.email &&
//                     x.password === req.body.passWord
//                 ){
//                     return res.json({
//                             nombres: x.nombres,
//                             apellidos: x.apellidos,
//                             email: x.email,
//                         });
//                 }
//             }
//             res.json({title:"error"});
//         }catch(error){
//             console.error("Error al procesar el registro:", error);
//             res.status(500).send("Error interno del servidor");
//         }
//     }
// }



const express = require('express');
const app = express();
const cors = require("cors");
const axios = require("axios");
const methods = require('methods');
const connection = require('../configDB/configDB');
app.use(cors())

const controller = {
    // register: function (req, res) {
    //     let config = {
    //         method: "GET",
    //         maxBodyLength: Infinity,
    //         url: "https://api.jsonbin.io/v3/b/6654d652acd3cb34a84e8a8b",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-Master-Key': '$2a$10$/aFDbFN3GK7KuDegqa8fmeFkmRR/TdLfj0B2gX4NSb5Kactr4HZEG'
    //         }
    //     };
    //     axios(config)
    //         .then(result => {
    //             let id = result.data.record.length + 1
    //             const usuarioNuevo = {
    //                 id: id,
    //                 identificacion: req.body.identificacion,
    //                 nombres: req.body.nombres,
    //                 apellidos: req.body.apellidos,
    //                 email: req.body.email,
    //                 direccion: req.body.direccion,
    //                 telefono: req.body.telefono,
    //                 fechaNacimiento: req.body.fechaNacimiento,
    //                 departamento: req.body.departamento,
    //                 municipio: req.body.municipio,
    //                 passWord: req.body.password,
    //                 estado: "activo",
    //                 rol: "Usuario",
    //                 fecha_creacion: new Date(),
    //             };
    //             if (result.data.record.length === 0) {
    //                 result.data.record.push(usuarioNuevo)
    //             }
    //             else {
    //                 for (x of result.data.record) {
    //                     if (
    //                         x.email === req.body.email
    //                     ) {
    //                         res.status(400).send("El Usuario ya existe en la base de datos");
    //                         return;
    //                     }
    //                 }
    //                 result.data.record.push(usuarioNuevo);
    //             }
    //             fetch("https://api.jsonbin.io/v3/b/6654d652acd3cb34a84e8a8b", {
    //                 method: "PUT",
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'X-Master-Key': '$2a$10$/aFDbFN3GK7KuDegqa8fmeFkmRR/TdLfj0B2gX4NSb5Kactr4HZEG'
    //                 },
    //                 body: JSON.stringify(result.data.record),
    //             })
    //                 .then(response => {
    //                     if (response.status === 200) {
    //                         res.status(200).send('ok')
    //                         return
    //                     }
    //                     else {
    //                         res.status(400).send("No Ok")
    //                         return
    //                     }
    //                 })
    //         })

    // },
    registerDB: function(req,res){
        const { identificacion, nombres, apellidos, email, direccion, telefono, fechaNacimiento, departamento, municipio, password } = req.body;
        
        try{
            const sql="INSERT INTO sql10715859.usuario (identificacion,nombre,apellidos,email,direccion,telefono,fechaNacimiento,departamento,municipio,password,fechaCreacion) VALUES(?,?,?,?,?,?,?,?,?,?,?)"
            connection.execute(sql,  [identificacion, nombres, apellidos, email, direccion, telefono, fechaNacimiento, departamento, municipio, password, new Date()]);
            console.log("datos subidos")
            res.status(200).send('ok')
        }catch(error){
            console.log('registro fallido ', error);
            res.status(500).send('no ok')
        }
    },
    // login: function (req, res) {
    //     let config = {
    //         method: "GET",
    //         maxBodyLength: Infinity,
    //         url: "https://api.jsonbin.io/v3/b/6654d652acd3cb34a84e8a8b",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-Master-Key': '$2a$10$/aFDbFN3GK7KuDegqa8fmeFkmRR/TdLfj0B2gX4NSb5Kactr4HZEG'
    //         }
    //     };
    //     try {
    //     axios(config)
    //         .then(result => {
    //             for (x of result.data.record) {
    //                 if (
    //                     x.email === req.body.email &&
    //                     x.password === req.body.passWord
    //                 ) {
    //                     return res.json({
    //                         nombres: x.nombres,
    //                         apellidos: x.apellidos,
    //                         email: x.email,
    //                     });
    //                 }
    //             }
    //             res.json({ title: "error" });
    //         });
    //     }
    //      catch (error) {
    //         console.error("Error al procesar el registro:", error);
    //         res.status(500).send("Error interno del servidor");
    //     }
    // },
    loginDB: function(req, res){
        const {email, password } = req.body;
        try{
            const sql="SELECT * FROM sql10715859.usuario WHERE email= ? AND password=?"
            connection.execute(sql, [email, password], (error, results) => {
                if (error) {
                    console.error('Error en la autenticación: ', error);
                    res.status(500).send('Error en la autenticación');
                } else {
                    if (results.length > 0) {
                        console.log('Usuario autenticado correctamente');
                        res.status(200).json(results[0]);
                    } else {
                        console.log('Credenciales incorrectas');
                        res.status(401).send('Credenciales incorrectas');
                    }
                }
            });
        }catch(error){
            console.log('login fallido ', error);
            res.status(500).send('no ok')
        }
    }
}



module.exports = controller;