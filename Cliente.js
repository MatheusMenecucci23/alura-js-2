//criar um arquivo com letra maiúscula quer dizer que aquele arquivo é uma classe
export class Cliente{//criando uma classe = molde
    //nome;//atributos
    //_cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){//com o constructor eu consigo atribuir valores para os atributos em tempo de construção, depois eu não consigo mais atribuir 
        this.nome = nome;
        this._cpf = cpf
    }
}