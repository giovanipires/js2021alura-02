
class Cliente{
	nome;
	cpf;
	agencia;
	saldo;
	rg;
};

const cliente1 = new Cliente();
cliente1.nome = `Giovani`;
cliente1.cpf = `05405130090`;
cliente1.agencia = `1001`;
cliente1.saldo = 0;
cliente1.rg = 0127009000;

const cliente2 = new Cliente();
cliente2.nome = `Marianna`;
cliente2.cpf = `05405130099`;
cliente2.agencia = `1001`;
cliente2.saldo = 0;

console.log(cliente1, cliente2);
