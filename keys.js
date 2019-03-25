console.log("this is loaded");
//Spotify API Keys
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
//BIT key information
exports.bandsInTown = {
  key: process.env.BANDS_IN_TOWN_KEY
};
// OMDB key information
exports.omdb = {
  key: process.env.OMDB_KEY
};
