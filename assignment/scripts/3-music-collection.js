console.log('***** Music Collection *****')

let collection = [];

addToCollection = (title, artist, yearPublished, name, duration) => {
    let information = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: { //nested object attempt
            name: name,
            duration: duration
        }
    }
    collection.push(information);
    //return console.log(information);
    return information;
};

addToCollection('For Now I Am Winter', 'Olafur Arnalds', 2013, 'Sudden Throw', '3:16');
// addToCollection('Rave', 'Dxrk', 2022);
// addToCollection('Discoveries', 'amies', 2021);
// addToCollection('Code 8', 'Ryan Taubert', 2022);
// addToCollection('Pink Skies', 'Noxz', 2021);
// addToCollection('Watching Ribbons', 'g s l f', 2020);

console.log(collection); // After all are added, console.log the collection array.

showCollection = (array) => {
    console.log(`The number of items in the array is: ${array.length}`)
    for (let i = 0; i<array.length; i++){
        console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}. Track name: ${array[i].tracks.name}. Song length: ${array[i].tracks.duration}`)
    }
}
showCollection(collection);

findByArtist = (artist) => {
    let matchedResults = [];
    let noResults = [];
    for (let i = 0; i < collection.length; i++) {
        if (artist == collection[i].artist) {
            matchedResults.push(collection[i]);
            return console.log(`This artist was found: ${artist}.`)
        }
    } 
            return console.log(`No artist was found. ${noResults}`)
}

findByArtist('Dxrk');

search = (searchArtist, searchYearPublished) => {
    searchArray = [];
    for (let i = 0; i<collection.length; i++){
    if (searchArtist === collection[i].artist && searchYearPublished === collection[i].yearPublished){
        searchArray.push(collection[i].artist, collection[i].yearPublished);
        return console.log(` artist: '${collection[i].artist}', year: ${collection[i].yearPublished}`);
    }
    }
        return console.log(`Didn't find anything, your array ${searchArray}is still empty.`);
};

search('Dxrk', 2022); //expect true
search('Olafur Arnalds', 2013); //expect true
search('Ryan Taubert', 2022); //expect true

search('Taylor Swift', 1994); //expect false
search('Ryan Taubert', 2021); //expect false, year is wrong.


/*
//Problem 7:
/* Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:
   - AddToCollection function to also take an input parameter for the array of tracks.
   - Update search to allow a trackName search criteria.
   - Update the showCollection function to display the list of tracks for each album with its name and duration.
*/

