import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{//criando uma funcionario gerente
    constructor(nome,salario,cpf){
        super(nome,salario,cpf)//com o super, tudo que é do funcionário vem para essa classe.

        super._bonificacao = 1.1;
    }
}