const cliente = {
    nome: "André",
    idade: 36,
    cpf: "334334334-23",
    email: "andre@teste.com",
    fones: ["32423123123", "23213124112"],
};

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dtNasc: "20/03/2011",
};

console.log(cliente);

cliente.dependentes.nome = "Sara Conor";

console.log(cliente);
