const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios
  .get(url)
  .then((response) => {
    const funcionarios = response.data;
    return funcionarios;
  })
  .then((funcionarios) => {
    // let mulheresChinesas = [];
    // funcionarios.forEach((funcionario) => {
    //   if (funcionario.pais === "China" && funcionario.genero === "F") {
    //     mulheresChinesas.push(funcionario);
    //   }
    // });
    // let salarios = [];
    // mulheresChinesas.forEach((mulher) => {
    //   salarios.push(mulher.salario);
    // });
    // let menorSalario = Math.min(...salarios);
    // mulheresChinesas.forEach((mulher) => {
    //   if (mulher.salario === menorSalario) {
    //     console.log(mulher.nome, mulher.salario);
    //   }
    // });

    // forma dois
    // const mulheresChinesas = funcionarios.filter((funcionario) => {
    //   return funcionario.pais === "China" && funcionario.genero === "F";
    // });
    // const salariosMulheresChinesas = mulheresChinesas.map(
    //   (mulheresChinesas) => {
    //     return mulheresChinesas.salario;
    //   }
    // );
    // let menorSalario = Math.min(...salariosMulheresChinesas);
    // let chinesaMenorSalario = mulheresChinesas.filter((chinesa) => {
    //   return chinesa.salario === menorSalario;
    // });
    // console.log(chinesaMenorSalario);

    // forma 3

    const chinesas = (f) => f.pais === "China" && f.genero === "F";
    const menorSalario = (func, funcAtual) => {
      return func.salario < funcAtual.salario ? func : funcAtual;
    };

    const chinesaMenorSalario = funcionarios
      .filter(chinesas)
      .reduce(menorSalario);
    console.log(chinesaMenorSalario);
  });
