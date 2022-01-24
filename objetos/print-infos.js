const objetoPessoa = {
    nome: "André",
    idade: 36,
    cpf: "334334334-23",
    email: "andre@teste.com",
};

console.log(
    `meu nome é ${objetoPessoa.nome}, e minha idade é ${objetoPessoa.idade} anos`
);

console.log(objetoPessoa.cpf.substr(0, 3));
