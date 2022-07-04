console.log('***** Music Collection *****')

//Problem 1:
// Create a variable collection that starts as an empty array.
let collection = [];

//Problem 2:
/* Add a function named addToCollection. This function should:
   - Take in the album's title, artist, yearPublished as input parameters
   - Create a new object having the above properties
   - Add the new object to the end of the collection array
   - Return the newly created object
*/

addToCollection = (title, artist, yearPublished) => {
    let information = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(collection);
    return console.log(information);
};
//Problem 3:
/* Test the addToCollection function:
   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
   - Console.log each album as added using the returned value.
   - After all are added, console.log the collection array.
*/

addToCollection('Brim', 'Olafur Arnalds', 2018);
addToCollection('Rave', 'Dxrk', 2022);
addToCollection('Discoveries', 'amies', 2021);
addToCollection('Code 8', 'Ryan Taubert', 2022);
addToCollection('Pink Skies', 'Noxz', 2021);
addToCollection('Watching Ribbons', 'g s l f', 2020);

//Problem 4:
/* Add a function named showCollection. This function should:
   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
   - Console.log the number of items in the array.
   - Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.
// Test the showCollection function.

//Problem 5:
/* Add a function named findByArtist. This function should:
   - Take in artist (a string) parameter
   - Loop through the collection and add any objects with a matching artist to the array.
   - Return the array with the matching results. If no results are found, return an empty array.

/* Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with   multiple matches, all are found.
*/


//Stretch Goals:
//When testing your functions, write all tests in the JavaScript file!

//Problem 6:
/* Create a function called search. This function should:
   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
   - { artist: 'Ray Charles', year: 1957 }
   - The returned output from search should meet these requirements:
        - Return a new array of all items in the collection matching all of the search criteria.
         - If no results are found, return an empty array.
        - If there is no search object or an empty search object provided as input, then return all albums in the collection.

//Problem 7:
/* Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:
   - UddToCollection function to also take an input parameter for the array of tracks.
   - Update search to allow a trackName search criteria.
   - Update the showCollection function to display the list of tracks for each album with its name and duration.
*/