const notas = [10, 6.5, 8, 7.5];
let somadasNotas = 0;

notas.forEach(function(nota){
    somadasNotas += nota;

});
const media = somadasNotas / notas.length;

console.log(`A media peniana é ${media}`);
