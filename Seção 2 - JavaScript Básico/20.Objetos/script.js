const array = [1, 2, 3];
array.push(4);
array[0] = "Guilherme";
console.log(array);

const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,

  fala() {
    console.log("Olá mundo!");
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa2 = criaPessoa("Guilherme", "Silva", 30);
console.log(pessoa2);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);

pessoa1.fala();
