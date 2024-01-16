const nums = [100, 200, 300, 400, 500, 600];

//1ª expressão: é executada apenas uma única vez
//2ª expressão: condição de execução
//3ª expressão: é executada sempre ao final do bloco

for (let indice = 0; indice < nums.length; indice++){
    console.log(`${nums[indice]} - ${indice}`);
}

