const nome = "Franklin";
const idade = 2021 - 1997;
const cidadeNatal = "São Paulo";

const apresentacao =
    "meu nome é " +
    nome +
    ", minha idade é " +
    idade +
    ", e nasci na cidade de " +
    cidadeNatal;

console.log("");
console.log(apresentacao);

//template com ``

const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade} 
e nasci na cidade de ${cidadeNatal}`; //ele aceita até quebra de linha com enter

console.log("");
console.log(apresentacao2);
