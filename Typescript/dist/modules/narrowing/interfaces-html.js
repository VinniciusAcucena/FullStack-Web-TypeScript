export const bootstrap = () => {
    const input = document.querySelector('.inputText');
    const video = document.querySelector('.promo');
    input.addEventListener('click', (event) => {
        console.log('Input clicado');
    });
    console.log(input.parentNode);
    console.log(input.id, input.className, input.tagName);
    console.log(input.draggable);
    console.log(input.value);
    console.log(video.volume);
};
