export class SistemaAutenticacao{//Criando um sistema para logar um funcionario
    static login(autenticavel,senha){// com o static eu não preciso criar uma instancia
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){//Verificando se ehAutenticavel é true ou false
            return autenticavel.autenticar(senha);//verificando se o parametro autenticavel tem a classe autenticar. autenticavel recebe a classe cliente ou funcionario;
        }
            return false;
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
        /*"verificando" se existe autenticar no autenticavel e se autenticar é uma função. Se a verificação for verdadeira recebe true se não recebe false
        . autenticavel recebe a classe cliente ou funcionario;*/
    }  
}
//duck type = se ele anda como um pato, se ela faz quack como uma pato, então ele é uma pato;
// duck type = o js não se interessa pelo tipo, mas sim pelo methodos e propierties. Ou seja, se ele tem um método que eu quero usar, eu vou usar;