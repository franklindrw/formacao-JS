const cliente = {
    nome: "André Conor",
    idade: 36,
    cpf: "334334334-23",
    email: "andre@teste.com",
    fones: ["32423123123", "23213124112"],
    dependentes: [
        {
            nome: "Sara Conor",
            parentesco: "filha",
            dtNasc: "20/03/1982",
        },
        {
            nome: "Deborah Conor",
            parentesco: "filha",
            dtNasc: "04/01/2014",
        },
    ],
    saldo: 100,

    _depositar: function (valor) {
        this.saldo += valor;
    },
};

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro para ${obj.nome}`);
    }
}

oferecerSeguro(cliente);
