export class Funcionario{
    constructor(nome,salario,cpf){//criando o funcionário
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }
    get senha(){
        return this._senha;
    }
    autenticar(senha){
        return senha == this._senha;//valor aqui é true ou false
    }
    cadastrarSenha(senha){//cadastrando uma senha
        this._senha = senha;
    }
}