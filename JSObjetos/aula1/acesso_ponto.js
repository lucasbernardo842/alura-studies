const cliente = {
    nome: "Leviano",
    idade: 21,
    cpf: '1231213512332132',
    email: "leviano@hash.com"
}

console.log(`O nome do vetin/cliente é ${cliente.nome} e sua idade é ${cliente.idade} anos`);

console.log(`Os 3 primeiros dígitos do CPF são ${cliente.cpf.substring(0, 3)}`);