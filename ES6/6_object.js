let user = {
    name: 'Marcos'
};
let user2 = {
    name: 'Soares'
};
// Alterando propriedade de um objeto
user.name = "Flávio";
user2['name'] = "Avansi";

console.log("Objetos alterados: ", user, user2);
const nome = "name";
user[nome] = "Soares";
console.log("Nova alteração: ", user, user2);

// Nova propriedade é só atribuir
user.lastName = "da Silva";
console.log("Adicionando lastname:", user);

// Apagando propriedade
delete user.name;
console.log("Propriedade name foi deletada:", user);

/////
const user3 = {
    name: "Marcos",
    lastName: "Soares"
}
/////

// Recuperando as Chaves do objeto / Valores do objeto
console.log("Chaves do objeto user3:", Object.keys(user3));
console.log("Valores do objeto user3:", Object.values(user3));
console.log("Todas as entradas do objeto user3:", Object.entries(user3));


// Merge de propriedades de objeto

console.log("Objeto antes do assign:", user3);
Object.assign(user3, {fullName: "Marcos Flávio Soares da Silva"})
console.log("Objeto depois do assign(adicionando):", user3);
console.log("Objeto depois do assign(novo objeto mergeando 2 ou mais objetos):", Object.assign({}, user3, {age: 42}));
// Se no lugar do novo objeto ({}) tiver um outro objeto, ele far o merge e guarda nesse objeto da primeira posição do assign


// Previnir alterações no objeto (congela)
const newObj = {foo: "bar"};
Object.freeze(newObj);
newObj.foo = "changes";
delete newObj.foo;
newObj.bar = "foo";

console.log("Variável newObj após alterações, com freeze( não alterou):", newObj);

// Previnir alterações na estrutura do objeto (permite mudar os valores)
const person = {name: "André"};
Object.seal(person);
person.name = "André Lucas";
delete person.name;
person.age = 26;
console.log("Variável person após alterações, com seal(alterou propriedade existente, mas não criou nem apagou propriedade", person);