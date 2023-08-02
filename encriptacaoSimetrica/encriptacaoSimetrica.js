import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const mensagem = 'Demonstração do curso de criptografia simétrica';
const chave = randomBytes(32);
const iv = randomBytes(16);

const cifra = createCipheriv('aes-256-gcm', chave, iv);

let mensagemCifrada = cifra.update(mensagem, 'utf8', 'hex') + cifra.final('hex');

console.log(mensagemCifrada);

// Transmissão ---------------- chave, iv, mensagem

const decifra = createDecipheriv('aes-256-gcm', chave, iv);

const mensagemDecrifrada = decifra.update(mensagemCifrada, 'hex', 'utf8');

console.log(mensagemDecrifrada);
