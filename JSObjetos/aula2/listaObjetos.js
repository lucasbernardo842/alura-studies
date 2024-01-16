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
]

cliente.enderecos.push({
    rua: "R. dos Cogumelos",
    numero: 444,
    apartamento: false,
});

const listaApenasAptos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);
console.log(listaApenasAptos)