const num1 = 9.54578;
const num2 = Math.floor(num1); // Arredonda o número para baixo
console.log(num2);
const num3 = Math.ceil(num1); // Arredonda o número para cima
console.log(num3);
const num4 = Math.round(num1); // Arredonda para o número mais proximo
console.log(num4);
console.log(Math.max(1, 2.5, 5, -10, -50, 100, 1590)); // Retorna o maior número
console.log(Math.min(1, 2.5, 5, -10, -50, 100, 1590)); // Retorna o menor número
console.log(Math.random()); // Gera um número aleatório

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Gera um número aleatório entre 5 e 10 e arredonda
console.log(aleatorio);
console.log(Math.PI); // Número PI
console.log(Math.pow(2, 10)); // Potencia de 2 elevado a 10 (2 ** 10)
console.log(Math.sqrt(9)); // Raiz quadrada de 9 (9 ** (1/2))
console.log(100/0); // em javascrip dá infinity
