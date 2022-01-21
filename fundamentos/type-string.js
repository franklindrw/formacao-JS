const txt1 = "Hello World!";
const txt2 = "Deus é fiel!";
const txt3 = `senhas123`;
const numeros = "1234567890";

const citacao = 'O Leobot disse "relatório concluído!"';
console.log(citacao);

/**
 * concatenação de String (+)
 */

const citacao2 = "Meu nome é ";
const nome = "Franklin";

console.log(citacao2 + nome);

/**
 * JavaScript diferencia minúsculas e maiúsculas,
 * tanto nos valores dos dados quanto no código que escrevemos
 */

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(`tipo da String é igual?: ${cidade === input}`);

//transformar o texto em minusculo
const inputMinusculo = input.toLowerCase();

console.log(`tipo da String é igual?: ${cidade === inputMinusculo}`);

/**
 * Contagem de caracter de uma variável
 */

const caracteres = "minhaSenhaNaoE123";

console.log(`qnt caracter: ${caracteres.length}`);
