// const fs= require('fs').promises;
// const path=require('path');
// const userFilePath=path.join(__dirname, '../../src/componentes/body/usuariosRegistrados.json');


const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
app.use(cors())

const controller={
    register: function(req,res){

        let config={
            method: 'GET',
            maxBodyLength:Infinity,
            url: 'https://api.jsonbin.io/v3/b/6654d652ad19ca34f87015e1',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key':'$2a$10$TTQkOJ9y6XKHV4hg.m4DVeTNDWpsKuT.jgioQWqai7.fkkT.B2ZEu'
            }
        };
        axios(config)
        .then(result=>{

            let id= result.data.record.length+1
            const usuarioNuevo={
                id:id,
                identificacion:req.body.identificacion,
                nombres:req.body.nombres,
                apellidos:req.body.apellidos,
                email:req.body.email,
                direccion:req.body.direccion,
                telefono: req.body.telefono,
                fechaNacimiento: req.body.fechaNacimiento,
                departamento:req.body.departamento,
                municipio:req.body.municipio,
                passWord: req.body.password,
                estado: "activo",
                rol: "Usuario",
                fecha_creacion: new Date(),
            };
            if (result.data.record.length === 0) {
                result.data.record.push(usuarioNuevo)
              }
              else {
                for (x of result.data.record) {
                  if (x.email === req.body.email) {
                    res.status(400).send("Usuario ya existe en la Base de Datos")
                    return
                  }
                }
                result.data.record.push(usuarioNuevo)
              }
              fetch("https://api.jsonbin.io/v3/b/6654d652ad19ca34f87015e1", {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
            "X-Master-Key": "$2a$10$TTQkOJ9y6XKHV4hg.m4DVeTNDWpsKuT.jgioQWqai7.fkkT.B2ZEu"
          },
          body: JSON.stringify(result.data.record),
        })

          .then(response => {
            if (response.status === 200) {
              res.status(200).send('ok')
              return
            }
            else {
              res.status(400).send("No Ok")
              return
            }
          })
      })

  }
}
module.exports= controller;