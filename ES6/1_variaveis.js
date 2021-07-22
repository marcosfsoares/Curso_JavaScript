
// STRINGS


// Retorna o tamanho de uma string
const textSize = "Texto".length;
console.log("Quantidade de letras: " + textSize);

// Split
const splittedText = "Texto".split('x');
console.log("Array com posições separadas pelo delimitador: ", splittedText);

// Replace
const replacedText = "A estrela mais brilhante".replace("brilhante", "bela");
console.log("Replace: ", replacedText);

// Slice - Retorna a fatia de uma valor
const lastChar = "brilhante".slice(-1);
console.log("Slice - Última posição de brilhante: ", lastChar);

// Igual no Python, não inclui a última posição no intervalo
const noLast = "brilhante".slice(0, -1);
console.log("Slice - Da posição 0 até a penúltima posição de brilhante: ", noLast);

const second2End = "brilhante".slice(1);
console.log("Slice - Da posição 1 até o fim: ", second2End);

// Substr - Retorna um pedaço da string a partir do começo e qtde de caracteres
const pedaco = "brilhante".substr(2, 4);
console.log("Substr - Sub string da palavra brilhante, com 4 caracteres a partir da pos 2 (2,4): ", pedaco);

