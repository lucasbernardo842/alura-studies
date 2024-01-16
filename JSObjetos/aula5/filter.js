const clientes = require('./clientes.json');

function filterAptoSemComplemento(lista){
    return lista.filter((cliente) => {
        return ( cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    })
}

const filtrados = filterAptoSemComplemento(clientes);

console.log(filtrados);