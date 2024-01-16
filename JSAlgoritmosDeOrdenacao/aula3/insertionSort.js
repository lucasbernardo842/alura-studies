const livros = require('../aula1/listalivros');

const troca = require('./troca');
// const livrosOrdenados = livros.sort(function(a,b){
//     if(a.titulo > b.titulo){
//         return 1;
//     }

//     if(a.titulo < b.titulo){
//         return -1;
//     }

//     return 0;    
// });

// console.log(livrosOrdenados); fiz sozinho

function insertionSort(lista){
    for(let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while(analise > 0 && lista[analise].titulo < lista[analise - 1].titulo){
          troca(lista, analise);
            analise--
        }
    }
    console.log(lista);  
}
insertionSort(livros)