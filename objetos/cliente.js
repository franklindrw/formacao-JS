class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, poupanca) {
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = poupanca;
    }
    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }
}

const andre = new ClientePoupanca(
    "felipe",
    "felipe@gmail.com",
    "34323423412",
    100,
    200
);

andre.exibirSaldo();

console.log(andre);
