import express from "express";

const app = express(); // isso cria o nosso servidor.

app.get("/", (req, res) => {
   res.send("Bem Vindo ao Curso de Node.js.");
});

app.listen(3000, () => {

  console.log("Servidor ativo na porta: 3000");  

});