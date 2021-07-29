export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    set cliente(novoValor){//acessor de atribuição, criando o cliente
        if(novoValor instanceof Cliente){//se o novoValor for da classe cliente, atribui o novoValor para esse cliente
            this._cliente = novoValor;
        }
       
    }

    get cliente(){//acessor de exibição
        return this._cliente;
    }    
    //#saldo=0;//# a hastag deixa o campo privado

    get saldo(){//exibir algo privado
        return this.saldo;
    }
    
    sacar(valor){//métodos ou operações
        let taxa = 1
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){//essa operação está encapsulada dentro desse método
            this._saldo = this._saldo - valorSacado;
            return valorSacado;//devolvendo/retornando um valor
            
        }
        else{
            console.log("Você não tem saldo suficiente");
        }
    };
    
    
    depositar(valor){
        if(valor<=0){
            return;//early return
        }
        this._saldo += valor;
    }


    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        conta.cidade="São Paulo";
    }
}