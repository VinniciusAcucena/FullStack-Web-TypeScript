type Movie = {
    title: string,
    year: number,
    [key: string | number] : string | number | boolean
}

type Movies = {
    [key: string] : Movie
}

let movies = {
    movie1: {
        title: 'A Origem',
        year: 2010,
        isFavorite: true,
        genre: 'Ficção cientifica',
        director: 'Chrisstopher Nolan'
    },
    movie2: {
        title: 'Um sonho de liberdade',
        year: 1994,
        isFavorite: true,
        genre: 'Drama',
        runtime: 142
    }, 
    movie3: {
        title: 'The Goodfather',
        year: 1972,
        isFavorite: false,
        genre: 'Crime'
    }
}

export function showMovies(movies: Movies) {
    console.log(movies)
}

showMovies(movies)