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
