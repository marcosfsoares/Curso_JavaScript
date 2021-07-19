

var nome = prompt("Qual o seu nome?");
var idade = prompt("Qual a sua idade?");
var frase = "Japão é o melhor time do mundo.";


//data
d = new Date;
console.log(d);
console.log(d.getMonth()+1); //O mês começa do ZERO
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());


//condicional
if(idade < 18) {
    alert("Você não pode acessar esta página.");
}
else {
    alert(d + "\nBem vindo "+ nome+"!" + "\nVocê tem " + idade + " anos!");
};

console.log("Meu nome é " + nome + ".");
console.log("Tenho "+ idade + " anos.");

//repetição
while(idade > 0) {
    console.log(idade);
    idade--;
};

for(var count = 0; count <=10; count++) {
    console.log(count);
};

//métodos nas strings
console.log(frase.replace("Japão", "Camarões"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(frase[0]);

//lista
var lista = ["maçã", "pera", "laranja"];
console.log(lista);
console.log("A segunda posição da lista é: " + lista[1]);

lista.push("uva");
console.log(lista);
lista[4] = "banana";
console.log(lista);
lista.pop();
console.log(lista);
console.log("A lista possui "+ lista.length + " elementos.");
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));

//dicionário
var fruta = {nome: "maçã", cor: "vermelha"};
console.log(fruta);
alert("fruta.nome = " + fruta.nome);
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "verde"}];
console.log(frutas);
alert("frutas[1].nome = " + frutas[1].nome);

//funções
function soma(n1,n2) {
    return n1 + n2;

};
alert(soma(5,10));

var validar = 0 // validar é variável global e está sendo dclarada
function validaIdade(idade2) {
    if(idade2 < 10) {
        validar = true; // A função está usando uma variável global.
    }
    else {
        validar = false; // Se fosse declarada, seria uma variável local.
    };
    return validar;
}

idade3 = prompt("Desculpe, esqueci qual é a sua idade...")
console.log(validaIdade(idade3));
console.log(validar); // A variável global foi alterada pela função. Resultado é o mesmo do #return.