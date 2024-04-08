console.log(`Trabalhando com Loops`);

const listaDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

console.log("\n Destinos Possíveis: ");
console.log(listaDestinos);


const idadeComprador = 20;
const estarAcompanhado = false;
let passagemComprada = false;
let destino = "Salvador";


const podeComprar = idadeComprador >= 18 || estarAcompanhado; 

let contador = 0;
let destinoExiste = false;

// while(contador<3){
    
//     if(listaDestinos[contador] == destino){
//         destinoExiste = true;
//         break;
//     }
//     contador++
// }

for(let cont = 0;cont < 3;cont++){
    if(listaDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
}

console.log("Destino Existe:", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!");
}else{
    console.log("Desculpe, tivemos um erro.")
}
