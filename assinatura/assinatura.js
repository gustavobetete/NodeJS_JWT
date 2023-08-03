import { generateKeyPairSync, createSign, createVerify } from 'crypto';

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    },
});

let dados = "Essa string vai ser assinada!";

// Assinatura

const assinador = createSign('SHA256');

assinador.update(dados);

const assinatura = assinador.sign(privateKey, 'hex');

console.log(assinatura);

// Assinatura inválida

dados = "Essa string foi alterada!"

// Verificação

const verificador = createVerify('SHA256');

verificador.update(dados);

const verificacao = verificador.verify(publicKey, assinatura, 'hex');

console.log(verificacao);