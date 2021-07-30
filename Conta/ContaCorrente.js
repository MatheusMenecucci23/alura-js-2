import { Conta } from "./Conta.js";
//extends = vai pegar tudo da classe referenciada - conta - e trabalhar na classe outra classe - ContaCorrente-
//extends faz a herança
//export = exporta para outro lugar
//o static atribui o atributo a classe ContaCorrente
//inicialização de atributos
//chamando o constructor da classe conta;
//sobreescreverá a função sacar no arquivo conta

export class ContaCorrente extends Conta{
    static numeroDeContas = 0
    constructor(cliente, agencia){
        super(0,cliente, agencia);
        ContaCorrente.numeroDeContas += 1
    }
    //sobreencrevendo o comportamento de sacar da classe conta
    sacar(valor){
        let taxa = 1.1
        return super._sacar(valor,taxa);
    };
    
}


