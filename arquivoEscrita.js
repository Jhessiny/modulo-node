const fs = require("fs");
const { join } = require("path");

const produto = {
  nome: "celular",
  preco: 1239.0,
  desconto: 0.15,
};

fs.writeFile(
  __dirname + "/arquivoGerado.json",
  JSON.stringify(produto),
  (err) => {
    console.log(err || "Arquivo salvo");
  }
);
