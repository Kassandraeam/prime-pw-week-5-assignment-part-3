console.log('***** Music Collection *****')
trackNumber = ['1.', '2.','3.','4.','5.','6.','7.','8.','9.','10.'];
let collection = [];

//Collection:
//okay maybe the object doesn't need to be IN the function?
addToCollection = (title, artist, yearPublished, tracks) => {
    let information = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks // this needs to be an array?
    }
    collection.push(information);
    return information;
    //return console.log(information); //remember to uncomment this.
};
let testingTracks = collection.tracks = 'Testing'; 
let testingTracks2 = collection.tracks = 'Testing2';
// information.tracks.name = 'track name'
// information.tracks.duration = 'duration'
//add an array of tracks to the album objects.
/*
information.tracks.name = 'track name'
information.tracks.duration = 'duration'
*/
addToCollection('For Now I Am Winter', 'Olafur Arnalds', 2013, testingTracks);
addToCollection('Living Room Songs', 'Olafur Arnalds', 2013, testingTracks2);
addToCollection('Island Songs', 'Olafur Arnalds', 2016);
addToCollection('What Am I Gonna Do On Sundays?', 'Olivia Dean', 2020);
addToCollection('Fragile', 'Laufey', 2022);
addToCollection('Festival Da Canção 2022', 'MARO', 2022);

//console.log(`This is the Collection array: ${collection}`) // this returns object object???
//console.log('This is the Collection array: ', collection)




//Show Collection:
showCollection = (array) => {
    console.log(`The number of items in the array is: ${array.length}`)
    for (let i = 0; i<array.length; i++){
        console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}.`);
        for (let i=0; i<collection.length; i++) {
            console.log(`${trackNumber[i]} ${collection[i].tracks}`);
        }
    }
};
showCollection(collection);

//Find by Artist:
findByArtist = (artist) => {
    let matchedResults = [];
//  let noResults = []; // I don't even need this if nothing is being pushed to the array anyway
    
    for (let i = 0; i < collection.length; i++) {
        if (artist == collection[i].artist) {
            matchedResults.push(collection[i]);
        }
    }
        return console.log(matchedResults)
}

//findByArtist('Olafur Arnalds') 
//findByArtist('MARO')
//findByArtist('Olly oly oly')


//Search Function

// may need to make these actual if else statements
//Search Function

// may need to make these actual if else statements
search = (searchArtist, searchYearPublished) => {
    let searchArray = [];
//maybe i do want a for loop containing all my if else statements

    for (let i = 0; i<collection.length; i++){
    //no input
    if (searchArtist === undefined || searchArtist === null || searchArtist === '' &&  searchYearPublished === undefined || searchYearPublished === null || searchYearPublished === '') {

     return console.log(collection);

    // matching input
    } else if (searchArtist === collection[i].artist && searchYearPublished === collection[i].yearPublished) {

        searchArray.push(collection[i].artist, collection[i].yearPublished, collection[i].title)

    // no matching input 
    } else if (searchArtist != collection[i].artist && searchYearPublished != collection[i].yearPublished) {
        searchArray;
    }
 }
    return console.log(searchArray);
}

//search('Olafur Arnalds', 2013); // should return (artist: 'Olafur Arnalds, year: 2013)
//search('Olaf Arnalds', 2013); // Should Empty array: search array
//search(); // should console the entire collection

//BROOOOOOOOOOOO WHYS THIS SO HARD

//Adding tracks
//Problem 7:
// Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:
//    - AddToCollection function to also take an input parameter for the array of tracks.
//    - Update search to allow a trackName search criteria.
//    - Update the showCollection function to display the list of tracks for each album with its name and duration.
// */

/*
lengthArray = [1,2,3,4,5];
whatWereGoingThrough = ['a', 'b', 'c', 'd', 'e', 'f', 'g']; //
for (i=0; i<lengthArray.length; i++){
    console.log(whatWereGoingThrough[i])
};

*/