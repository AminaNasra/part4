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

// create the search function
/**
 * sequentialSearch for  arrays of objects
 * @param {array} arraySearch - // the array to be searched
 * @param {number} target - the value to be found in the array
 * @returns {null}   if the movieID is not in the array,
 * @returns {movie} the movie if the movieID is in the array.
 */

function sequentialSearch(arraySearch, movieID) {
  // set a found variable
  let found = null;
  // loop through the array
  for (let i = 0; i < arraySearch.length; i++) {
    // compare the current index to our target
    if (arraySearch[i].movieID == movieID) {
      // set found to index
      found = arraySearch[i];
      // terminate the loop
      break;
    }
  }
  // return found
  return found;
}

// Example search operation
const searchId = 6;
// call the function
const foundMovie = sequentialSearch(movies, searchId);
// output the results
if (foundMovie == null) {
  console.log(`The movieID of ${searchId} was not found ${foundMovie}`);
} else {
  console.log(
    `The movieID of ${searchId} was found: ${JSON.stringify(foundMovie)}`
  );
}
