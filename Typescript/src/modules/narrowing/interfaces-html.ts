export const bootstrap = (): void => {
    const input = document.querySelector('.inputText') as HTMLInputElement
    const video = document.querySelector('.promo') as HTMLVideoElement

    input.addEventListener('click', (event: Event) => {
        console.log('Input clicado')
    })

    console.log(input.parentNode)
    console.log(input.id, input.className, input.tagName)
    console.log(input.draggable)
    console.log(input.value)
    console.log(video.volume)
}