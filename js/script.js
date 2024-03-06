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
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	private: false,
// };

// let lastWatchedMovie = prompt("What is your last watched movie?", "");
// let scoreOfTheWatchedMovie = prompt("What is rating for this film?", "");
// let lastWatchedMovieNew = prompt("What is your last watched movie?", "");
// let scoreOfTheWatchedMovieNew = prompt("What is rating for this film?", "");

// personalMovieDB.movies[lastWatchedMovie] = scoreOfTheWatchedMovie;
// personalMovieDB.movies[lastWatchedMovieNew] = scoreOfTheWatchedMovieNew;
// console.log(personalMovieDB);

//Official decision
let numberOfFilms;

function start() {
	numberOfFilms = +prompt("How many films you watched", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("How many films you watched", "");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};



function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("What is your last watched movie?", ""),
			b = prompt("What is rating for this film?", "");
    
		if (a != null && b != null && a != "" && b != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("Done");
		} else {
			console.log("Error");
			i--;
		}
	}
}

// rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Watched too few films");
	} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
		console.log("You classic viewer");
	} else if (personalMovieDB.count.count >= 30) {
		console.log("You movie fan");
	} else {
		console.log("Fatal error");
	}
}

// detectPersonalLevel();

function showMyDB (hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Your favourite genre by number ${i}`);
	}
}

writeYourGenres();


