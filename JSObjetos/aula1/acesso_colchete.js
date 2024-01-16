const cliente = {
    nome: "Leviano",
    idade: 21,
    cpf: '1231213512332132',
    email: "leviano@hash.com"
}

console.log(`O nome do vetin/cliente é ${cliente["nome"]} e sua idade é ${cliente["idade"]} anos`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach( (chave)=> {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
});