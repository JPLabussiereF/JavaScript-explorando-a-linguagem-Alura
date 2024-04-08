console.log(`Trabalhando com Listas`);

const listaDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

listaDestinos.push("Curitiba");

console.log("Destinos Possíveis: ");
console.log(listaDestinos);

listaDestinos.splice(1, 1); // Remove
console.log(listaDestinos);
console.log(listaDestinos[0]);
console.log(listaDestinos[1], listaDestinos[0]);
console.log(listaDestinos[2]);

console.log(listaDestinos[3]); 

console.log(listaDestinos.length)
