/**
 * Aritméticos
 * + Adição / Concatenação
 * - / * Subtração, divisão e multiplicação
 * ** Potenciação
 * % resto da divisão
 * Precedência
 * ()
 * **
 * * / %
 * + -
 * Incremento = ++
 * Decremento = --
 */

const n1 = 5;
const n2 = 10;
const n3 = "9";
let contador = 1;
console.log(n1 + n2);
console.log(n1 + n3);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 - n2);
console.log(n1 ** n2);
console.log(n1 % n2);
console.log((n1 + n2) * n3);
contador++;
++contador;
console.log(contador++);
console.log(contador);
console.log(++contador);
console.log(contador--);
console.log(contador);
console.log(--contador);
contador = 1;
contador += 9; // contador = contador + 9;
console.log(contador);
contador -= 9; // contador = contador - 9;
console.log(contador);
contador *= 10; // contador = contador * 10
console.log(contador)
contador /= 10; // contador = contador / 10
console.log(contador)
contador = 2
contador **= 3; // contador = contador ** 3
console.log(contador)
// NaN = Not a number
// parseInt() = converte em um número inteiro;
// parseFloat() = converte em um número flutuante;
// Number() = converte em um número;
