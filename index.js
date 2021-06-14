
class Cliente{
	nome;
	cpf;
	rg;
};

class Conta {
	agencia;
	conta
	_saldo;

	sacar(valor) {
		if (this._saldo >= valor) {
			this._saldo -= valor;
			return valor;
		}
	};

	depositar(valor) {
		if (valor > 0) {
			return;
		}
		this._saldo += valor;
	};
}

const cliente1 = new Cliente();
cliente1.nome = `Giovani`;
cliente1.cpf = `05405130090`;
cliente1.rg = `0127009000`;

const contaCliente1 = new Conta();
contaCliente1.agencia = `1001`;
contaCliente1.conta = `001-x`;
contaCliente1._saldo = 0;

console.log(contaCliente1._saldo);
contaCliente1.depositar(250);
console.log(contaCliente1._saldo);
contaCliente1.sacar(50);
console.log(contaCliente1._saldo);

console.log(cliente1);
console.log(contaCliente1);

const cliente2 = new Cliente();
cliente2.nome = `Marianna`;
cliente2.cpf = `05405130099`;
cliente2.rg = `0127879000`;

const contaCliente2 = new Conta();
contaCliente2.agencia = `1001`;
contaCliente2.conta = `002-x`;
contaCliente2._saldo = 0;
contaCliente2.depositar(300);



