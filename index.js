
import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente();
cliente1.nome = `Giovani`;
cliente1.cpf = `05405130090`;
cliente1.rg = `0127009000`;

const cliente2 = new Cliente();
cliente1.nome = `Marianna`;
cliente1.cpf = `05405130999`;
cliente1.rg = `0127009999`;

const contaCliente1 = new Conta();
contaCliente1.agencia = `1001`;
contaCliente1.conta = `001-x`;
contaCliente1._saldo = 0;
contaCliente1.cliente = cliente1;

const contaCliente2 = new Conta();
contaCliente2.agencia = `1001`;
contaCliente2.conta = `002-x`;
contaCliente2._saldo = 0;
contaCliente2.cliente = cliente1;

contaCliente1.depositar(500);
contaCliente1.transferir(200, contaCliente2);

console.log(contaCliente2);
console.log(contaCliente1);


