const listaDeChamada = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Camilo",
    "Andre",
];

//remove a partir do indice 1, 2 elementos, e insere o Rodrigo.
//não é necessário o terceiro parametro, ele pode somente remover.
listaDeChamada.splice(1, 2, "Rodrigo");

// após o 4 elemento adiciona Juliana
listaDeChamada.splice(4, 0, "Juliana");

console.log(`Lista de Chamada: ${listaDeChamada}`);
