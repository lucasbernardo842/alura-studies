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

const chavesDoObjetos = Object.keys(cliente);

console.log(chavesDoObjetos);

if(!chavesDoObjetos.includes("enderecos")){
    console.error("Erro, bota um endereço aí vetin!!!")
}