const num1 = 10;
const num2 = 2.5;
const num3 = 15.449212115444244514465;
// IEEE 754-2008
const num4 = 0.7;
const num5 = 0.1;
console.log(num4 + num5); // O resultado deveria ser 0.8, mas não é.
console.log(((num4 * 100) + (num5 * 100)) / 100); // o resultado dá certo agora 0.8
console.log(Number((num4+num5).toFixed(2))); // outra maneira de resolver o problema
//
console.log(num1.toString() + num2);
console.log(typeof num1); // num1 continua sendo number
console.log(num1.toString(2)); // representação binária do num1
console.log(num3.toFixed(2)); // limita o número de casa decimais mostrada
console.log(Number.isInteger(num1)); // saber se o número é inteiro
console.log(Number.isNaN(num1)); // saber se é um not a number