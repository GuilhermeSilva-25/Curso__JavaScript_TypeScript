/* 
Não podemos criar constantes com palavras reservadas
Constantes precisam ter nomes significativos
Não pode começar o nome de uma constante com um número
Não podem conter espaços ou traços
Utilizamos camelCase
Case-sensitive
Não podemos modificar o valor de uma constante
*/

const nome = "João";
console.log(nome);
const primeiroNumero = 5;
const segundoNumero = 10;
const soma = primeiroNumero + segundoNumero;
console.log(soma);
const dobroSoma = soma * 2;
console.log(dobroSoma);
let triploSoma = soma * 3;
console.log(triploSoma);
triploSoma += 55;
console.log(triploSoma);
console.log(typeof(nome));
console.log(typeof(primeiroNumero));
