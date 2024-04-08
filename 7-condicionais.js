console.log(`Trabalhando com Listas`);

const listaDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

console.log("Destinos Possíveis: ");
console.log(listaDestinos);

// const idadeComprador = 15;
// const estarAcompanhado = true;

// if(idadeComprador>=18){
//     console.log("Comprador maior de Idade");
//     listaDestinos.splice(1, 1);

// }else if(estarAcompanhado){
//     console.log("Comprador está acompanhado");
//     listaDestinos.splice(1, 1);

// }else{
//     console.log("Não é maior de idade. Logo, não posso vender");
// }

const idadeComprador = 21;
const estarAcompanhado = false;
const passagemComprada = true;

if (idadeComprador >= 18 || estarAcompanhado) {
  console.log("Boa Viagem");
  listaDestinos.splice(1, 1);
}else {
  console.log("Não é maior de idade. Logo, não posso vender");
}

console.log(listaDestinos);

console.log("Embarque: \n\n");
if((idadeComprador >= 18 || estarAcompanhado) && passagemComprada){
    console.log("Boa Viagem");

}else{
    console.log("Você não pode embarcar");
}

// Operadores Lógicos

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
