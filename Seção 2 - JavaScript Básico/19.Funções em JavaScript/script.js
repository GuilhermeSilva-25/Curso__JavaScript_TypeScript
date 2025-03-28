function saudacao(nome) {
  return `Bom dia ${nome}!`;
}

function soma(n1, n2, n3 = 10) {
  return n1 + n2 + n3;
}

const variavel = saudacao("Guilherme");
console.log(variavel);

const valorSoma = soma(3, 7);
console.log(valorSoma);
const valorSoma2 = soma(15, 15);
console.log(valorSoma2);
const valorSoma3 = soma(30, 70, 100);
console.log(valorSoma3);

const raiz = function (n) {
  return n**0.5;
};

console.log(raiz(9))

const nomeCompleto = (nome, sobrenome) => {
  return nome + " " + sobrenome
};

console.log(nomeCompleto("Guilherme", "Silva"))