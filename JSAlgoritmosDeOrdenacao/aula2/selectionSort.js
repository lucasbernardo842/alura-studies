const livros = require("../aula1/listalivros");
const menorValor = require("../aula1/menorValor");
const troca = require('../aula3/troca')

for (let atual = 0; atual < livros.length - 1; atual++){
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
};

// console.log(livros);
// livros.forEach((_, indice) => {
//     let menor = menorValor(livros, indice);
//     troca(livros, indice);
// });

console.log(livros)