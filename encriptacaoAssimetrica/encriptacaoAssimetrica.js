import { generateKeyPairSync } from 'crypto';

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

// console.log(privateKey, publicKey)

import { publicEncrypt, privateDecrypt } from 'crypto';

const mensagem = 'Demonstração do curso de criptografia assimétrica';

const mensagemCifrada = publicEncrypt(publicKey, Buffer.from(mensagem));

console.log(mensagemCifrada.toString('hex'));

const mensagemDecifrada = privateDecrypt(privateKey, mensagemCifrada);

console.log(mensagemDecifrada.toString('utf8'));