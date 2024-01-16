const nomes = ['Leviano', 'Brandão', 'Alee','Alee', 'Jovem D','Jovem D','Jovem D'];

// const novosNomes = nomes.forEach(function(nome){
//     if (nome = nome)
//     {
//         nomes.pop(nome);
//     }
//     else
//     {
//         return [...nomes, nome]
//     }
// }); DEU ERRADO :(

// const meuSet = new Set(nomes); DA PRA PASSAR DIRETO EM BAIXO SEM CRIAR CONST MEU NOBRE
const nomesAtt = [...new Set(nomes)];
console.log(nomesAtt);