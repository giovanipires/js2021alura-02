export class Conta {
	agencia;
	conta;
	cliente;
	//atributo privado representado por underline na frente
	_saldo;

	sacar(valor) {
		if (this._saldo >= valor) {
			this._saldo -= valor;
			return valor;
		}
	};

	depositar(valor) {
		if (valor < 0) {
			return;
		}
		this._saldo += valor;
	};

	transferir(valor, cliente) {
		const valorTransferido = this.sacar(valor);
		cliente.depositar(valorTransferido);
	}
}