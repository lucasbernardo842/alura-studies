// const jogadores = [
//     {
//     nome: 'Veiga',
//     valorDeMercado: 27
//     },

//     {
//     nome: 'Gustavo Scarpa',
//     valorDeMercado: 20
//     },


//     {
//     nome: 'Dudu',
//     valorDeMercado: 7
//     },

//     {
//     nome: 'Weverton',
//     valorDeMercado: 12
//     },
    
//     {
//     nome: 'Rony Russo',
//     valorDeMercado: 27
//     }];

// function ordenar (lista, propriedade){
//     const resultado = lista.sort((a,b) => {
//         if (a[propriedade] < b[propriedade]){
//          return -1;
//         } 
//         if (a[propriedade] > b[propriedade]){
//          return 1;
//         }
//         return 0;
//      });
//      return resultado;
//  }

// const jogadorcaro = ordenar(jogadores, "valorDeMercado");
// console.log(jogadorcaro) fiz esse código de ordenação para esse aula antes de seguir o exemplo com os livros a qual farei abaixo

const arrProdutos = require('./listalivros.js');

function menorValor(arrProdutos, posiçãoInicial){

let maisBarato = posiçãoInicial;

for (let atual = posiçãoInicial; atual < arrProdutos.length; atual++){
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
        maisBarato = atual;
    }
}
return maisBarato;
}
module.exports = menorValor;