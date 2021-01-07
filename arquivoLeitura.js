const fs = require("fs");

// const caminho = __dirname + "/arquivo.json"; //recebe como json
// const config = require("./arquivo.json"); // recebe como objeto
// console.log(config.db);

// const conteudo = fs.readFileSync(caminho, "utf8");
// console.log(conteudo);

// fs.readFile(caminho, "utf8", (err, conteudo) => {
//   const config = JSON.parse(conteudo); //precisa do parse, pois recebeu como json
//   console.log(`${config.db.host}: ${config.db.port}`);
// });

fs.readdir(__dirname, (err, arquivos) => {
  console.log(arquivos);
});
