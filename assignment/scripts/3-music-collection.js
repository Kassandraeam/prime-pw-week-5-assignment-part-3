console.log('***** Music Collection *****')
let collection = [];

//Collection:
//okay maybe the object doesn't need to be IN the function?
addToCollection = (title, artist, yearPublished) => {
    let information = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(information);
    //return;
    return console.log(information); //Returns the newly created object.
};


addToCollection('For Now I Am Winter', 'Olafur Arnalds', 2013); 
addToCollection('Living Room Songs', 'Olafur Arnalds', 2013);
addToCollection('Island Songs', 'Olafur Arnalds', 2016);
addToCollection('What Am I Gonna Do On Sundays?', 'Olivia Dean', 2020);
addToCollection('Dear Soulmate', 'Laufey', 2022);
addToCollection('Stare at Each Other & Fall in Love', 'Daniela Andrade', 2018);

showCollection = (array) => {
    console.log(`The number of items in the array is: ${array.length}`)
    for (let i = 0; i<array.length; i++){
        console.log('',array[i].title, "by", array[i].artist, "published in", array[i].yearPublished);
        }
        return;
};

//showCollection(collection);

//Find by Artist:
findByArtist = (artist) => {
    let matchedResults = [];
    for (let i = 0; i < collection.length; i++) {
        if (artist == collection[i].artist) {
            matchedResults.push(collection[i]);
        }
    }
        return console.log(matchedResults)
}

//findByArtist('Olafur Arnalds') //Should return three albums: For Now I am Winter, Living Room Songs, and Island Songs
//findByArtist('Maro') // No matching results so should return empty array.


//Search Function
search = (searchArtist, searchYearPublished) => {
    let searchArray = [];
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

//search('Olafur Arnalds', 2013); // should return (artist: 'Olafur Arnalds, year: 2013) and two albums.
//search('Olaf Arnalds', 2013); // Should return empty array
//search(); // should console the entire collection
