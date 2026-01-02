export const bootstrap = (): void => {

    const body = document.querySelector('body') as HTMLBodyElement

    const video = document.querySelector('#promo') as HTMLVideoElement
    
    const input = document.querySelector('.inputText') as HTMLInputElement

    video.volume
    if(input) {
        input.addEventListener('blur', (event: FocusEvent) => {
            alert('teste')
        })
    }

}