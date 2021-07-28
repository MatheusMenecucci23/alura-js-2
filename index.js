class Cliente{//criando uma classe= molde
    nome;//atributos
    cpf;
}
class ContaCorrente{
    agencia;
    //#saldo=0;//# a hastag deixa o campo privado
    _saldo = 0
    sacar(valor){//metodos ou operações
        if (this._saldo >= valor){//essa operação está encapsulada dentro desse método
            this._saldo = this._saldo - valor;
            return valor;//devolvendo/retornando um valor
            
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
}

//cliente1 é um objeto
//new cria uma novo objeto na classe ou instancia um novo objeto
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100); 
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(valorSacado);

console.log(contaCorrenteRicardo);
