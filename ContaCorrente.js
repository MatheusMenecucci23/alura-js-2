import { Conta } from "./Conta.js";
//extends = vai pegar tudo da classe referenciada - conta - e trabalhar na classe outra classe - ContaCorrente-


export class ContaCorrente extends Conta{//export = exporta para outro lugar
    static numeroDeContas = 0//o static atribui o atributo a classe ContaCorrente

    constructor(cliente, agencia){//inicialização de atributos
        super(0,cliente, agencia);//chamando o constructor da classe conta;
        ContaCorrente.numeroDeContas += 1
    }
    
}


//extends faz a herança