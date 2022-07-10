console.log('***** Music Collection *****')
trackNumber = 1;
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

let test = 'This did not push?';

//let testingTracks = collection.tracks = 'Testing'; 
//let testingTracks2 = collection.tracks = 'Testing2';
// information.tracks.name = 'track name'
// information.tracks.duration = 'duration'
//add an array of tracks to the album objects.
/*
information.tracks.name = 'track name'
information.tracks.duration = 'duration'
*/
// so now I can input multiple tracks. But how will I get it to print #1. and #2. in front of each element of the array.
//addToCollection('Album', 'Artist', year, [{name: "track name", duration: "3:04"}])

// first three albums are from the same artist. The first two of those three were made in the same year (not true, but just to test the search function.). 
//{name:"", duration:""},
addToCollection('For Now I Am Winter', 'Olafur Arnalds', 2013, [{name: "Sudden Throw", duration: "3:16"}, {name: "Brim", duration: "4:42"}, {name:"For Now I Am Winter", duration:"5:05"},{name:"A Stutter", duration:"5:09"},{name: "Words of Amber", duration:"3:22"},{name:"Reclaim", duration:"4:01"}, {name: "Hands, Be Still", duration:"3:06"},{name:"Only The Winds", duration:"5:21"},{name:"Old Skin", duration:"4:08"},{name:"We (Too) Shall Rest", duration:"2:05"},{name:"This Place Was A Shelter", duration:"3:50"},{name:"Carry Me Anew", duration:"3:30"}]); 

addToCollection('Living Room Songs', 'Olafur Arnalds', 2013, [{name: "Fyrsta", duration: "4:16"}, {name: "Near Light", duration:"3:28"},{name:"Film Credits", duration:"3:24"},{name:"Lag Fyrir Ömmu", duration:"3:32"},{name:"This Place Is a Shelter", duration:"2:18"}]);

addToCollection('Island Songs', 'Olafur Arnalds', 2016, [{name:"Árbakkinn - Islands Songs I", duration:"4:56"},{name:"1995 - Island Songs II", duration:"4:02"}, {name:"Raddir", duration:"4:13"},{name:"Öldurót - Island Songs IV", duration:"4:28"},{name:"Dalur - Island Songs V", duration:"4:02"},{name:"Particles - Island Songs VI", duration:"3:58"},{name:"Doria - Island Songs VII", duration:"3:22"},{name:"Study For Player Piano (II)", duration:"3:37"}]);

addToCollection('What Am I Gonna Do On Sundays?', 'Olivia Dean', 2020, [{name:"What Am I Gonna Do On Sundays?", duration:"3:29"},{name:"The Hardest Part", duration:"2:56"},{name:"Echo", duration:"3:17"},{name:"Out", duration:"4:04"}]);

addToCollection('Dear Soulmate', 'Laufey', 2022, [{name:"Dear Soulmate", duration:"4:20"},{name:"Fragile", duration:"4:01"},{name:"Everything I Know About Love", duration:"3:29"}]);

addToCollection('Stare at Each Other & Fall in Love', 'Daniela Andrade', 2018, [{name: "Lose My Mind", duration: "2:41"},{name:"Stare at Each Other & Fall in Love ", duration:"3:48"}]);

// for (let trackNames of tracks){
//     console.log(trackNames);
// }

//console.log("HERE", tracks);


//I can't access the keys:values outside of the function.
//console.log(`This is the Collection array: ${collection}`) // this returns object object???
//console.log('This is the Collection array: ', collection)
//console.log(collection);
//Show Collection:

showCollection = (array) => {
    console.log(`The number of items in the array is: ${array.length}`)
    for (let i = 0; i<array.length; i++){
      //console.log('',array[i].title, "by", array[i].artist, array[i].yearPublished, array[i].tracks);
        console.log('',array[i].title, "by", array[i].artist, "published in", array[i].yearPublished);
        //console.log(typeof(array[i].tracks)); //object
        //console.log(array[i].tracks);
        let plzWork = array[i].tracks;
        let GODIAMSOTIREDOFTHISPROBLEM = Object.values(plzWork)
       //console.log(GODIAMSOTIREDOFTHISPROBLEM);
        for (let pain of GODIAMSOTIREDOFTHISPROBLEM){
            //https://www.w3schools.com/js/js_json_stringify.asp#:~:text=Stringify%20a%20JavaScript%20Object&text=Use%20the%20JavaScript%20function%20JSON,stringify(obj)%3B
            let myJSON = JSON.stringify(pain);
            console.log(myJSON)
            //console.log(typeof(myJSON)); //STRING
        }
        //console.log(typeof(GODIAMSOTIREDOFTHISPROBLEM))
        // for (let PLZGODWORK of plzWork){
        //     console.log(PLZGODWORK); //object
        // }

    }
        return;
};
//it's treating the array[i].tracks as one large array. I need to break the array into its constituent parts. For of

// collection = ['Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5'];
// trackNumber = 1;
// for (let collections of collection) {
//     console.log(trackNumber + ". " + collections);
//     trackNumber += 1;
// }
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