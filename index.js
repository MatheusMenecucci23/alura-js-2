import {Cliente} from "./Cliente.js"//import = importa a classe tal do lugar tal
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import{Conta} from "./Conta.js";

//cliente1 é um objeto
//new cria uma novo objeto na classe ou instancia um novo objeto
const cliente1 = new Cliente("Ricardo", 11122233309);// só consigo atribuir assim por causa do constructor



const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100)


const ContaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);

console.log(ContaPoupanca1);
console.log(contaCorrenteRicardo);

// contaCorrenteRicardo.depositar(100); 
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);
// const valorSacado = contaCorrenteRicardo.sacar(50);






