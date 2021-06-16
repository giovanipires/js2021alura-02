
import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente(`Giovani`, `05405130090`);
const cliente2 = new Cliente(`Marianna`, `05405130999`);

const contaCliente1 = new Conta(cliente1, `1001`);
const contaCliente2 = new Conta(cliente2, `1001`);

contaCliente1.depositar(500);
contaCliente1.transferir(200, contaCliente2);

console.log(contaCliente1, contaCliente2);

console.log(`O número de contas no byteback é: ${Conta.numeroDeContas}`);