const cliente = {
    nome: "Clériton",
    idade: 20,
    email: "teto@15pracada.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if (valor > this.saldo) {
            console.log("você é quebrado, broke boy")
        }
        else {
            this.saldo -= valor;
            console.log (`Rico novinho, tá pago meu nobre ${this.nome}, saldo novo do meu príncipe é ${this.saldo} `);
        }
    },
};

cliente.efetuaPagamento(40);
