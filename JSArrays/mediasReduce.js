const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];


// let somaJS = 0;
// let somaJava = 0;
// let somaPython = 0;

// salaJS.forEach((nota) => {somaJS += nota / salaJS.length});
// salaJava.forEach((nota) => {somaJava += nota / salaJava.length});
// salaPython.forEach((nota) => {somaPython += nota / salaPython.length});

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) =>{
        return acumulador + nota;
    }, 0);

    const media = somaDasNotas / notasDaSala.length;
    return media;
}




console.log([calculaMedia(salaJS), calculaMedia(salaJava), calculaMedia(salaPython)]);

