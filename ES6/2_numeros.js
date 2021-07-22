const numero = 12.4032;

// To string
paraString = numero.toString();
console.log("Tipo da const Número:", typeof numero);
console.log("Transformado em string:", typeof paraString);

// Casas Decimais
const duasCasas = numero.toFixed(2);
console.log("Número:", numero);
console.log("Com duas casas:", duasCasas);

// String to Float
console.log("String parseada para float:", parseFloat(paraString), typeof(parseFloat(paraString)));
console.log("String parseada para Int:", parseInt(paraString), typeof(parseInt(paraString)));


