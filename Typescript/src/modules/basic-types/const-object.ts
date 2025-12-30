type File = {
    readonly name: string,
    size: number
}

const file: File = {
    name: 'texto.txt',
    size: 349
} as const

//file.name = ''

export function handFileUpload(file: File) {
    console.log(`Nome: ${file.name}`)
    console.log(`Tamanho: ${file.size}`)
}



handFileUpload(file)