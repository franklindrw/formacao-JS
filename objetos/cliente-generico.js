function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = (valor) => {
        this.saldo += valor;
    };
}

const andre = new Cliente(
    "André Conor",
    "443784245-57",
    "andrezao@gmail.com",
    100
);

console.log(andre);
