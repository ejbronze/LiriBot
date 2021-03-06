# LIRI-Bot

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## LIRI uses the following commands:

```
concert-this
```

```
spotify-this-song
```

```
movie-this
```

```
do-what-it-says
```

## Technologies used:

- Node.js
- Javascript

## npm packages:

[insert here]

## How to Run LIRI-Bot

- Step One: node liri my-tweets This will show your last 20 tweets and when they were created at in your terminal/bash window.

- Step Two: node liri spotify-this-song `<song name here>`.
  This will show the following information about the song in your terminal/bash window:
  _ Artist(s)
  _ The song's name
  _ A preview link of the song from Spotify
  _ The album that the song is from

      	If no song is provided then the program will default to
      	"My Heart Will Go On" by Celine Dion

- Step Three: node liri.js movie-this `<movie name here>`.
  This will output the following information to your terminal/bash window:
  _ Title of the movie.
  _ Year the movie came out.
  _ IMDB Rating of the movie.
  _ Country where the movie was produced.
  _ Language of the movie.
  _ Plot of the movie.
  _ Actors in the movie.
  _ Rotten Tomatoes Rating. \* Rotten Tomatoes URL.
  If the user doesn't type a movie in, the program will output data for the movie 'Crazy, Stupid, Love.'

- Step Four: node liri.js do-what-it-says

      	This will output the command placed in random.txt file
