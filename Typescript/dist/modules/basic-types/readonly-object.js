"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMovies = showMovies;
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
};
function showMovies(movies) {
    //movies.movie1.title = 'The origin'
    console.log(movies);
}
showMovies(movies);
