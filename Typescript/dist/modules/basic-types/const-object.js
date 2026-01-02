const file = {
    name: 'texto.txt',
    size: 349
};
//file.name = ''
export function handFileUpload(file) {
    console.log(`Nome: ${file.name}`);
    console.log(`Tamanho: ${file.size}`);
}
handFileUpload(file);
