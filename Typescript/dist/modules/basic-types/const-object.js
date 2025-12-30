"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handFileUpload = handFileUpload;
const file = {
    name: 'texto.txt',
    size: 349
};
//file.name = ''
function handFileUpload(file) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho: ${file.size}`);
}
handFileUpload(file);
