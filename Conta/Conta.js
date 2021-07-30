//Classe abstrata = só serve para ser herdada e não instanciadas
export class Conta{// essa é uma classe MÃE, pois o comportamentos são compartilhados pelas classes filhos.
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta");// lançando um erro
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }


    set cliente(novoValor){//acessor de atribuição, criando o cliente
        if(novoValor instanceof Cliente){//se o novoValor for da classe cliente, atribui o novoValor para esse cliente
            this._cliente = novoValor;
        }
       
    }


    get cliente(){//acessor de exibição, assim ninguém consegue alterar sem o "SET"
        return this._cliente;
    }    
    //#saldo=0;//# a hashtag deixa o campo privado


    get saldo(){//exibir algo privado
        return this.saldo;
    }
    
    //método abstrato = apenas para lembrar que é preciso definir esse método para cada classe específica.
    sacar(valor){//métodos ou operações
        throw new Error("Metódo Sacar da conta é abstrato")
    };


    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){//essa operação está encapsulada dentro desse método
            this._saldo = this._saldo - valorSacado;
            return valorSacado;//devolvendo/retornando um valor
            
        }
        else{
           return console.log("Você não tem saldo suficiente");
        }
    }
    

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