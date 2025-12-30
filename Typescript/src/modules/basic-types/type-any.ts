export function handFileUpload(file: any) {
    console.log(`Nome: ${file.name}`)
    console.log(`Tamanho: ${file.zesi}`)
}

const file = {
    name: 'texto.txt',
    size: 349
}

handFileUpload(file)