//               01234567
let umaString = "Um texto";
console.log(umaString); // Um texto
console.log(umaString[3]); // t
console.log(umaString[8]); // undefined
console.log(umaString[-3]); // undefined
console.log(umaString.charAt(3)); // t
console.log(umaString.charAt(8)); // valor vazio
console.log(umaString.concat(" em um lindo dia")); // Um texto em um lindo dia
console.log(umaString.indexOf("texto")); // Em qual índice começa a palavra
console.log(umaString.indexOf("Texto")); // Em qual índice começa a palavra(T maiúsculo, retorna -1, palavra não encontrada)
console.log(umaString.indexOf("o", 3)); // Em qual índice começa a busca pela letra o
console.log(umaString.lastIndexOf("m", 3)); // começa a busca do final da palavra
console.log(umaString.match(/[a-z]/g)); // uso de expressão regular que vai retornar todas as letras minusculas da string
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[a-z]/)); // retorna o índice do que foi pedido pela expressão regular
console.log(umaString.search(/x/)); // retorna o índice do que foi pedido pela expressão regular
console.log(umaString.replace("Um", "Outro")); // substitui uma palavra por outra
console.log(umaString.replace(/Um/, "Outro")); // substitui uma palavra por outra
umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.replace(/r/, "#")); // substitui a primeira letra r pelo simbolo
console.log(umaString.replace(/r/g, "#")); // substitui todas as letras r pelo simbolo
console.log(umaString.length); // ver tamanho da string, conta a partir do 1 e não do zero como os índices
console.log(umaString.slice(2, 6)); // fatia a string, o ultimo indice indicado não é fatiado, para um antes
console.log(umaString.slice(-5)); // inicia do final da string e pega os 5 índices 
console.log(umaString.slice(32)); // iniciando no índice 32 e indo até o final
console.log(umaString.slice(-5, -1)); // pega os 5 ultimos índice e elimina o ultimo
console.log(umaString.substring(umaString.length - 5)); // pega o tamanho da string subtrai 5 e começa a partir do indice do resultado
console.log(umaString.split(" ")); // divide a string pelo espaço
console.log(umaString.split("r")); // divide a string pelo r
console.log(umaString.split(" ", 2)); // divide a string pelo espaço e divide só duas vezes
console.log(umaString.toUpperCase()); // string toda em letras maiusculas
console.log(umaString.toLowerCase()); // string toda em letras minuscula
