export const bootstrap = (): void => {


    const movies = ['movie 1', 'movie 2', 'movie 3']

    const movie = movies.find(item => item.includes('movie 2'))

    if(movie) {
        console.log(movie)
    } else {
        console.warn('Filme não encontrado')
    }


    console.log(false ? 'truthy' : 'falsy')
    console.log(0 ? 'truthy' : 'falsy')

    console.log(true ? 'truthy' : 'falsy')
    console.log(1 ? 'truthy' : 'falsy')
}