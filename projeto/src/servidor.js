const porta = 3003;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bancoDeDados = require("./bancoDeDados");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res) => {
  res.send(bancoDeDados.getProdutos()); //converte para json
});

app.get("/produtos/:id", (req, res) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

app.post("/produtos", (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); // json
});

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});
