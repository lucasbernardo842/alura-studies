import fs from 'fs';
import chalk from "chalk";

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]] : captura[2]}));
    return resultados;
}


function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Não tankou, tem arquivo não porra? só meteu o diretorio?'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo){
    try {
        const encoding = 'utf-8'
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(extraiLinks(texto));
}
    catch (erro){
        trataErro(erro);
    }
    finally {
        console.log(chalk.yellow('operação concluída'));
    }
}



// promises com then ()

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(trataErro)
// }

pegaArquivo('./arquivos/texto.md')

//\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)