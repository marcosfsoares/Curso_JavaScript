const symbol1 = Symbol();
const sysmbol2 = Symbol();

// Simbolos são únicos
console.log("simbol1 é igual a symbol2?", symbol1==sysmbol2);

// Previnem conflitos entre nomes de propriedades
const name2Symbol1 = Symbol("name");
const name2Symbol2 = Symbol("name");

const user = {
    [name2Symbol1]: "Marcos",
    [name2Symbol2]: "Outro Nome",
    lastName: "Flavio Soares"
};
console.log(user);
console.log("Propriedades do objeto user:", Object.keys(user));

// Symbols criam propriedades que não são Enumerables
// O simbolo não aparece no laço de repetição, dificultado acesso à chave
for(const key in user) {
    if(user.hasOwnProperty(key)) {
        console.log("\nValor da chave: " + key + ":" + user[key])
    }
}
console.log("Propriedades do objeto user:", Object.keys(user));
console.log("Valores das propriedades do objeto user:", Object.values(user));
// O symbolo também não aparece no keys nem no values


// Para exibir os simbolos do objeto:
console.log("Symbols registrados no objeto user:", Reflect.ownKeys(user));

// Criar um enum (simular uma criação de enum - ver mais pra frente)
const directions = {
    UP  :Symbol( 'UP' ),
    DOWN  :Symbol( 'DOWN' ),
    LEFT  :Symbol( 'LEFT' ),
    RIGHT  :Symbol( 'RIGHT' )
};