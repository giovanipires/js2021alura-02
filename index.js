
class Cliente{
	nome;
	cpf;
	rg;
};

class Conta {
	agencia;
	conta
	saldo;
}

const cliente1 = new Cliente();
cliente1.nome = `Giovani`;
cliente1.cpf = `05405130090`;
cliente1.rg = `0127009000`;

const contaCliente1 = new Conta();
contaCliente1.agencia = `1001`;
contaCliente1.conta = `001-x`;
contaCliente1.saldo = 0;


const cliente2 = new Cliente();
cliente2.nome = `Marianna`;
cliente2.cpf = `05405130099`;
cliente2.rg = `0127879000`;

const contaCliente2 = new Conta();
contaCliente2.agencia = `1001`;
contaCliente2.conta = `002-x`;
contaCliente2.saldo = 0;

console.log(cliente1, contaCliente1);
console.log(cliente2, contaCliente2);