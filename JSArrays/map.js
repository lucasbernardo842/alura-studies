const notas = [10, 9.5, 8, 7, 6];

// const notasBonus = notas.forEach((nota) => {
//     nota + 1;
// });
// console.log(notasBonus) errado tentativa solo
const notasBonus = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);

console.log(notasBonus);