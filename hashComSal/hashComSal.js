import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComSal(senha) {
    const sal = randomBytes(16).toString('hex');
    const hash = scryptSync(senha, sal, 64);
    return `${sal}:${hash.toString('hex')}`;
}

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':');
    }

    autentica(nome, senha){
        if(nome === this.nome){
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');

            const hashsCorrespondem = timingSafeEqual(testeHash, hashReal);

            if(hashsCorrespondem){
                console.log(`Usuário autenticado`)
                return true;
            }
        }

        console.log(`Usuário não autenticado`)
        return false;
        
    }
}

const usuario = new Usuario('joao', 'senha123456');

console.log(usuario)

// caso de sucesso
usuario.autentica('joao', 'senha123456');

// caso de erro
usuario.autentica('gustavo', 'senha123456');