
import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente();
cliente1.nome = `Giovani`;
cliente1.cpf = `05405130090`;
cliente1.rg = `0127009000`;

const contaCliente1 = new Conta();
contaCliente1.agencia = `1001`;
contaCliente1.conta = `001-x`;
contaCliente1._saldo = 0;

contaCliente1.depositar(100);
contaCliente1.depositar(100);
contaCliente1.depositar(-100);
const valorSacado = contaCliente1.sacar(50);

console.log(valorSacado);
console.log(contaCliente1);


