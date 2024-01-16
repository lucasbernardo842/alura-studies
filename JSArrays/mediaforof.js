const notas = [10, 6.5, 8, 7.5];

let somadasNotas = 0;

for (let nota of notas){
    somadasNotas += nota;
}

console.log(somadasNotas / notas.length);