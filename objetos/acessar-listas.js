const objetoPessoa = {
    nome: "André",
    idade: 36,
    cpf: "334334334-23",
    email: "andre@teste.com",
};

const chaves = ["nome", "idade", "cpf", "email"];

// console.log(objetoPessoa[chaves[3]]);

chaves.forEach((chave) => console.log(objetoPessoa[chave]));
