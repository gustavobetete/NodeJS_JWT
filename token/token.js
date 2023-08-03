import jwt from 'jsonwebtoken';

const chaveSecreta = "chaveSuperSecreta";

const token = jwt.sign(
        { 
            id: 1, 
            nome: "Fulano",
            apelido: "Fulano da Silva",
            curso: "Ciência da Computação"
        }, chaveSecreta
    );

console.log(token);

const verificacao = jwt.verify(token, chaveSecreta);

console.log(verificacao);