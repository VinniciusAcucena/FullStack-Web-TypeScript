export function handFileUpload(file) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho: ${file.zesi}`);
}
const file = {
    name: 'texto.txt',
    size: 349
};
handFileUpload(file);
