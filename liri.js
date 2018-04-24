/** get dotenv */
require("dotenv").config();

// get API keys
var keys = require('./keys.js');
var client = new Twitter(keys.keys_twitter);
var spotify = new Spotify(keys.keys_spotify);

// get modules
var Twitter = require('twitter');
var inquirer = require('inquirer');
var omdb = require('omdb');

// get user input
var commandOne = process.argv[2];
var commandTwo = process.argv[3];


/** FUNCTIONS */

var getTweets = function() {
    var params = {screen_name: 'rdreessen'};
    Twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
    });
};

var getSong = function() {
    spotify.search({ type: 'track', query: commandTwo }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
     
        console.log(data);
    });
};

var movieThis = function() {
    omdb.get({ title: commandTwo }, true, function(err, movie) {
        if(err) {
            return console.error(err);
        }
     
        if(!movie) {
            return console.log('Movie not found!');
        }
     
        console.log("Title: " + movie.title, + "\n Year: " + movie.year + "\n Rating: " + movie.imdb.rating + "\n");
        console.log(movie.plot);
    });
};

var doWhatItSays = function() {
    fs.readFile("movies.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }

        var dataArr = data.split(",");

        var commandOne = dataArr[0];
        var commandOne = dataArr[1];
        liri();
    });
};

var liri = function() {
    if (commandOne === "my-tweets") {
        getTweets();
    } else if (commandOne === "spotify-this-song") {
        getSong();
    } else if (commandOne === "movie-this") {
        movieThis();
    } else if (commandOne === "do-what-it-says") {
        doWhatItSays();
    } else {
        console.log("command not understood! try one of these: \n my-tweets \n spotify-this-song \n movie-this \n do-what-it-says");
    }
}

/** EVENTS */

// run the program!
liri();