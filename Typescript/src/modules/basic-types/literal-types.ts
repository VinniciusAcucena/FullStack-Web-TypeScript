type logType = 'info' | 'warn' | 'error'



export function logger(type: logType, message: string) {
    switch(type) {
        case 'info':
            console.log(`Info: ${message}`)
            break
        
        case 'warn':
            console.log(`warn: ${message}`)
            break

        case 'error':
            console.log(`Error: ${message}`)
            break
    }
}

logger('error', 'Log com algum aviso')