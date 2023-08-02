import { createHash } from 'crypto';

function criaHash(senha) {
  return createHash('sha256').update(senha).digest('hex');
}

//console.log(criaHash('uma senha qualquer'))

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.senha = criaHash(senha);
    }

    autentica(nome, senha){
        if(nome === this.nome && this.senha === criaHash(senha)){
            console.log(`Usuário ${nome} autenticado`)
            return true;
        }

        console.log(`Usuário ${nome} não autenticado`)
        return false;
    }
}

const usuario = new Usuario('joao', 'senha123456');

console.log(usuario)

// caso de sucesso
usuario.autentica('joao', 'senha123456');

// caso de fracasso
usuario.autentica('gustavo', 'senha123456');