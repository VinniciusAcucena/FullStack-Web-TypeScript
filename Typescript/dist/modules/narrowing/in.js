export const bootstrap = () => {
    const response = [
        { id: '7sufr9jfq8', movie: 'movie 1' },
        { id: '7sufr9jfq8', song: 'song 1' },
    ];
    function showItems(items) {
        const body = document.querySelector('body');
        if (body instanceof HTMLBodyElement) {
            items.map(item => {
                const itemElement = document.createElement('div');
                if ('song' in item) {
                    itemElement.textContent = item.song;
                    itemElement.style.background = 'yellow';
                }
                else if ('movie' in item) {
                    itemElement.textContent = item.movie;
                    itemElement.style.background = 'aquamarine';
                }
                body.appendChild(itemElement);
            });
        }
    }
    showItems(response);
};
