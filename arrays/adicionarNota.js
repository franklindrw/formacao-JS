const notas = [10, 6, 8];

notas.push(7);

console.log(`lista de notas: ${notas}`);

const somaNotas = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`Média do Aluno: ${somaNotas}`);
