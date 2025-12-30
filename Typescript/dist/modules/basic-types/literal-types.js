"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = logger;
function logger(type, message) {
    switch (type) {
        case 'info':
            console.log(`Info: ${message}`);
            break;
        case 'warn':
            console.log(`warn: ${message}`);
            break;
        case 'error':
            console.log(`Error: ${message}`);
            break;
    }
}
logger('error', 'Log com algum aviso');
