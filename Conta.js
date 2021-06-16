import {Cliente} from "./Cliente.js";

export class Conta {
	agencia;
	conta;
	
	//atributo privado representado por underline na frente
	_cliente;
	
	set cliente(novoValor) {
		if(novoValor instanceof Cliente) {
			this._cliente = novoValor;
		}
	};

	get cliete() {
		return this._cliente;
	}

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