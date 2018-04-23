/** VARIABLES */
require("dotenv").config();
const keys = require('keys.js');
const spotify = new Spotify(keys.spotify);
const twitter = new Twitter(keys.twitter);

const inquirer = require('inquirer');
// const fs = require('fs');

var commandOne = process.argv[2];
var commandTwo = process.argv[3];


/** FUNCTIONS */



/** EVENTS */

if (commandOne === "my-tweets") {
    // client.get('favorites/list', function(error, tweets, response) {
    //     if(error) throw error;
    //     console.log(tweets);
    //     console.log(response);
    // });
    twitter.get('http://api.twitter.com/1.1/statuses/user_timeline.json?count=2',{include_entities:false},);
} else if (commandOne === "spotify-this-song") {
    spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;
        }
     
        // Do something with 'data' 
    });
}

// console.log(commandOne + " " + commandTwo);