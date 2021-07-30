import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario{//criando um funcionario diretor
    constructor(nome,salario,cpf){
        super(nome,salario,cpf);//com o super, tudo que é do funcionário vem para essa classe.
        super._bonificacao = 2;
    }
}