const notas = [10, 6.5, 8, 7.5];

let somadasNotas = 0;

for (let i = 0; i < notas.length; i++){
    somadasNotas += notas[i];
}

const media = somadasNotas / notas.length;

console.log(`A média das notas é ${media}!`)