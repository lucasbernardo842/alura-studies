const alunos = ['levianin', 'Dudu', 'Derek', 'Navarro'];
const medias = [10, 8, 7.5, 9];

const listaAluMed = [alunos, medias];
function exibeNomeeNota(aluno){
    if(listaAluMed[0].includes(aluno)){
        
        // const alunos = listaAluMed[0];
        // const medias = listaAluMed[1];
        
        const [alunos, medias] = listaAluMed;

        console.log(`${aluno} está cadastrado!`);
        const indice = alunos.indexOf(aluno);
        const medAluno = medias[indice];

        console.log(`A Média do nerd é: ${medAluno}`)
    } else{
        console.log('Aluno não encontrado!');
    }
}
console.log(exibeNomeeNota('Derek'))

