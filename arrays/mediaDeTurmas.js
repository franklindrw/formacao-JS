const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce(
        (acumulador, atual) => atual + acumulador,
        0
    );
    return somaDasNotas / notasDaSala.length;
}

console.log(`Média da Sala de JavaScript ${mediaSala(salaJS)}`);
console.log(`Média da Sala de Java ${mediaSala(salaJava)}`);
console.log(`Média da Sala de Python ${mediaSala(salaPython)}`);

const notas = [10, 9, 8, 7];

const media = notas.reduce((acumulador, atual) => atual + acumulador, 0);

console.log(media / notas.length);
