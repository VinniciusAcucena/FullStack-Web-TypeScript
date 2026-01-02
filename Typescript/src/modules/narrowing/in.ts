export const bootstrap = (): void => {
    type Item = {
        id: string,
        [key: string] : string | null
    }

    const response: Item[] = [
        {id: '7sufr9jfq8', movie: 'movie 1'},
        {id: '7sufr9jfq8', song: 'song 1'},
    ]

    function showItems(items: Item[]): void {
        const body = document.querySelector('body')

        if(body instanceof HTMLBodyElement) {
            items.map(item => {
                const itemElement = document.createElement('div')

                if('song' in item) {
                    itemElement.textContent = item.song
                    itemElement.style.background = 'yellow'
                } else if ('movie' in item) {
                    itemElement.textContent = item.movie
                    itemElement.style.background = 'aquamarine'
                }

                body.appendChild(itemElement)
            })
        }
    }

    showItems(response)
}