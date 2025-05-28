// file: movieClass.js
// desc: This file defines the Movie class blueprint  encapsulating properties like: movieID, title, year, rating.
//uses the Movie class and creates a movies array  based on Movie class,
// sorts the movies array in ascending order. Implements linearSearch function algorithm to find movieID in the input movies array.
// Author: Amina Aar

// Last modified: 28/05/2025
// version 1.0.0

// declare a Movie class
class Movie {
  // constructor
  constructor(movieID, title, year, rating) {
    this.movieID = movieID;
    this.title = title;
    this.year = year;
    this.rating = rating;
  } // end constructor
} // end movie class

// create a movie object based on Movie class
const movie = new Movie(1, "The Shawshank Redemption", 1994, 8.5);

// output the movie object to console
console.log(movie);

// create an array of 10 movies
const movies = [
  new Movie(5, "Inception", 2010, 8.8),
  new Movie(3, "Interstellar", 2014, 8.6),
  new Movie(8, "The Dark Knight", 2008, 9.0),
  new Movie(1, "Fight Club", 1999, 8.8),
  new Movie(10, "The Matrix", 1999, 8.7),
  new Movie(6, "Pulp Fiction", 1994, 8.9),
  new Movie(2, "The Shawshank Redemption", 1994, 9.3),
  new Movie(9, "Forrest Gump", 1994, 8.8),
  new Movie(4, "The Godfather", 1972, 9.2),
  new Movie(7, "The Lord of the Rings: The Return of the King", 2003, 9.0),
];

// output movies array to console
console.log("Here is the movies array:");
movies.forEach((movie) => console.log(movie));

// sorting movies array in  ascending order by movieID.
movies.sort((a, b) => a.movieID - b.movieID);

console.log("sorted movies by movieID:");
// loop over sorted movies array and display to console
movies.forEach((movie) => console.log(movie));
