/**
 * tipo de dados Booleanos
 */
/*
console.log("");
console.log(`print1: ${}`);
*/

//  conversao implicita
const numero = 456;
const numeroString = "456";

console.log("");
console.log(`print1: ${numero === numeroString}`); //verifica se é exatamente igual
console.log("");
console.log(`print2: ${numero == numeroString}`); //o JS converte automaticamente string para número e compara

console.log("");
console.log("converteu o numero para string");
console.log(`print3: ${numero + numeroString}`); //o JS converte automaticamente string para número e compara

/**
 *conversao explicita
 */

// string para number -> Number();
//number para String -> String();

console.log("");
console.log(`print4: ${numero + Number(numeroString)}`);
