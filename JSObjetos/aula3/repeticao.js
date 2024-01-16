const cliente = {
    nome: "Clériton",
    idade: 20,
    email: "teto@15pracada.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
    {
    rua: "R. da erva",
    numero: 420,
    apartamento: true,
    complemento: "apto. 69 ",
    },
];
for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo != 'object' && tipo != 'function'){
        console.log(`O campo ${chave} tem o valor ${cliente[chave]}`);
    }
}