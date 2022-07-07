console.log('***** Music Collection *****')
trackNumber = ['1.', '2.','3.','4.','5.','6.','7.','8.','9.','10.'];
let collection = [];

addToCollection = (title, artist, yearPublished, name, duration) => {
    let information = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: [name, duration] // this needs to be an array?
    }
    collection.push(information);
    //return console.log(information);
    return information;
};


addToCollection('For Now I Am Winter', 'Olafur Arnalds', 2013, 'Sudden Throw', '3:16');
// addToCollection('Rave', 'Dxrk', 2022, 'RAVE', '2:49');
// addToCollection('Discoveries', 'amies', 2021, 'Come Find Me', '3:26');
// addToCollection('What Am I Gonna Do On Sundays?', 'Olivia Dean', 2020, 'What Am I Gonna Do On Sundays?', '3:29');
// addToCollection('Fragile', 'Laufey', 2022, 'Fragile', '4:01');
// addToCollection('Festival Da Canção 2022', 'MARO', 2022, 'saudade, saudade', '3:01');
// addToCollection('Feeding Seahorses by Hand', 'Billie Marten', 2019, 'She Dances', '4:43');

//console.log(collection); // After all are added, console.log the collection array.

// loop that goes through the length of the tracks array and starts it with 1. 2. 3. so on so forth and then array[i].tracks[0] and then the duration.
//for loop that only goes through the tracks part of the object?
//for (let i = 0; i<array[i].tracks.length; i++)
// but I also want this to print something like #1... #2...etc etc.
showCollection = (array) => {
    console.log(`The number of items in the array is: ${array.length}`)
    for (let i = 0; i<array.length; i++){
        console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}.`);
        for (let i=0; i<collection.length; i++) {
            console.log(`${trackNumber[i]} ${array[i].tracks[0]}: ${array[i].tracks[1]}`);
        }
    }
};

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


search = (searchArtist, searchYearPublished) => {
    let searchArray = [];
    //no search criteria 
    if (searchArtist === undefined || searchArtist === null || searchArtist === '' &&  searchYearPublished === undefined || searchYearPublished === null || searchYearPublished === '') {
        return console.log(collection)
    }
    //if something matches
    for (let i = 0; i<collection.length; i++){
        if (searchArtist === collection[i].artist && searchYearPublished === collection[i].yearPublished){
            searchArray.push(collection[i].artist, collection[i].yearPublished);
            return console.log(` artist: '${collection[i].artist}', year: ${collection[i].yearPublished}`);
     }
    //no results are found
    if (searchArtist != collection[i].artist && searchYearPublished != collection[i].yearPublished){
            return console.log(`Empty array: `, searchArray)
    }
}
};

//search(); // should console the entire collection
//search('Olafur Arnalds', 2013); // should return (artist: 'Olafur Arnalds, year: 2013)
//search('Olaf Arnalds', 2013); // Should Empty array: search array


//Problem 7:
// Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:
//    - AddToCollection function to also take an input parameter for the array of tracks.
//    - Update search to allow a trackName search criteria.
//    - Update the showCollection function to display the list of tracks for each album with its name and duration.
// */