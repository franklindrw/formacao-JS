function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = (valor) => {
        this.saldo += valor;
    };
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}

const ju = new ClientePoupanca(
    "Juliana Nacimento",
    "12334766-52",
    "andrezao@gmail.com",
    100,
    200
);

console.log(ju);

ClientePoupanca.prototype.depositarPoup = function (valor) {
    this.saldoPoup += valor;
};

ju.depositarPoup(30);

console.log(ju.saldoPoup);
