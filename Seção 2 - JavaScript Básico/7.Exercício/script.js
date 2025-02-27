const nomeCompleto = "Guilherme dos Santos Silva";
const anoNascimento = 1994;
const anoAtual = new Date();
const idade = anoAtual.getFullYear() - anoNascimento - 1;
const peso = 74;
const alturaEmMetros = 1.8;
const indiceMassaCorporal = peso / alturaEmMetros ** 2;
console.log(
  `${nomeCompleto} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmMetros} de altura e seu IMC é de ${indiceMassaCorporal.toFixed(
    2
  )}`
);
