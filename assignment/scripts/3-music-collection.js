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
addToCollection('Rave', 'Dxrk', 2022, 'RAVE', '2:49');
addToCollection('Discoveries', 'amies', 2021, 'Come Find Me', '3:26');
addToCollection('What Am I Gonna Do On Sundays?', 'Olivia Dean', 2020, 'What Am I Gonna Do On Sundays?', '3:29');
addToCollection('Fragile', 'Laufey', 2022, 'Fragile', '4:01');
addToCollection('Festival Da Canção 2022', 'MARO', 2022, 'saudade, saudade', '3:01');
addToCollection('Feeding Seahorses by Hand', 'Billie Marten', 2019, 'She Dances', '4:43');

//console.log(collection); // After all are added, console.log the collection array.

showCollection = (array) => {
    console.log(`The number of items in the array is: ${array.length}`)
    for (let i = 0; i<array.length; i++){
        console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}. Track name: ${array[i].tracks.name}. Song length: ${array[i].tracks.duration}`)
    }
}
//showCollection(collection);

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

//findByArtist('Dxrk');
search = (searchArtist, searchYearPublished) => {
    searchArray = [];
    for (let i = 0; i < collection.length; i++) {
        if (searchArtist === collection[i].artist && searchYearPublished === collection[i].yearPublished){
            searchArray.push(collection[i].artist, collection[i].yearPublished);
            console.log(` artist: '${collection[i].artist}', year: ${collection[i].yearPublished}`);
        } else if (searchArtist != collection[i].artist && searchYearPublished != collection[i].yearPublished){
            console.log('I am going through each item in the collection.');
        } else if (searchArtist === undefined || searchArtist === null || searchArtist === '' && searchYearPublished === undefined || searchYearPublished === null || searchYearPublished === ''){
            console.log(collection);
        }
    }
};


// search = (searchArtist, searchYearPublished) => {
//     searchArray = [];
//     for (let i = 0; i<collection.length; i++){
//     if (searchArtist === collection[i].artist && searchYearPublished === collection[i].yearPublished){
//         searchArray.push(collection[i].artist, collection[i].yearPublished);
//         return console.log(` artist: '${collection[i].artist}', year: ${collection[i].yearPublished}`);
//     }
//     }
//         return console.log(`Didn't find anything, your array ${searchArray}is still empty.`);
// };

search('Olivia Dean', 2020); //expect true
search('Olafur Arnalds', 2013);
//search();
//search('Taylor Swift', 1994); //expect false
//search(); // return collection

//search('Olafur Arnalds', 2013); //expect true
//search('Olivia Dean', 2020); //expect true
//search();

/*
function (searchArtist, searchYearPublished){
    searchArray = [];
    for loop running through the collection {
        if (successful searchArtist and searchYearPublished) {
            push collection.artist and collection.year published to search array
            console log search Array
        }
        else if (no results are found) {
            console log the searchArray which should be empty
        } 
        else if (searchArtist === undefined || searchArtist === null || searchArtist === '' && searchYearPublished === undefined || searchYearPublished === null || searchYearPublished === '') {
            return collection
        }
    }
}
*/

//semi working code:
/*
search = (searchArtist, searchYearPublished) => {
    searchArray = [];
    for (let i = 0; i < collection.length; i++) {
        if (searchArtist === collection[i].artist && searchYearPublished === collection[i].yearPublished){
            searchArray.push(collection[i].artist, collection[i].yearPublished);
            console.log(` artist: '${collection[i].artist}', year: ${collection[i].yearPublished}`);
        } else if (searchArtist != collection[i].artist && searchYearPublished != collection[i].yearPublished){
            console.log('I am going through each item in the collection.');
        } else if (searchArtist === undefined || searchArtist === null || searchArtist === '' && searchYearPublished === undefined || searchYearPublished === null || searchYearPublished === ''){
            return console.log(collection);
        }
    }
};

*/


/*
//If there is no search object or an empty search object provided as input, then return all albums in the collection
// searchArtist === undefined || searchArtist === null || searchArtist === '' && searchYearPublished === undefined || searchYearPublished === null || searchYearPublished === ''


if (searchArtist === undefined || searchArtist === null || searchArtist === '' && searchYearPublished === undefined || searchYearPublished === null || searchYearPublished === '')
    return console.log(collection)

// if new array matches all search criteria, return array of all items in the collection that match.
//no results --> return empty array
//nothing put into search criteria, return collection


//Problem 7:
Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:
   - AddToCollection function to also take an input parameter for the array of tracks.
   - Update search to allow a trackName search criteria.
   - Update the showCollection function to display the list of tracks for each album with its name and duration.
*/