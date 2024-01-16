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
    complemento: "apto. 69 "
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`ligando para ${telefoneComercial}`);
    console.log(`ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}
console.log(encomenda)
