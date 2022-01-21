// var

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area;

//let (deixa mudar suas variaveis conforme percorre o código)
// let forma = "retangulo";
// let altura = 5;
// let comprimento = 7;

// let area;

// if (forma == "retangulo") {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area);

//const (não permite mudar a forma enquanto percorre o código, é sempre fixo)

const forma = "quadrado";
const altura = 5;
const comprimento = 7;
//const não pode ser criada sem receber um valor ex: const area;
let area;

if (forma === "quadrado") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);
