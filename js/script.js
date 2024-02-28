"use strict";
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// let numberOfFilms = prompt("How many films you watched", "");

// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// let lastWatchedMovie = prompt("What is your last watched movie?", "");
// let scoreOfTheWatchedMovie = prompt("What is rating for this film?", "");
// let lastWatchedMovieNew = prompt("What is your last watched movie?", "");
// let scoreOfTheWatchedMovieNew = prompt("What is rating for this film?", "");

// personalMovieDB.movies[lastWatchedMovie] = scoreOfTheWatchedMovie;
// personalMovieDB.movies[lastWatchedMovieNew] = scoreOfTheWatchedMovieNew;
// console.log(personalMovieDB);

//Official decision
const numberOfFilms = +prompt("How many films you watched", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const a = prompt("What is your last watched movie?", ""),
  b = prompt("What is rating for this film?", ""),
  c = prompt("What is your last watched movie?", ""),
  d = prompt("What is rating for this film?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
