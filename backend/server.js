

const express = require('express');
const request = require('request');
// var crypto = require('crypto');
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');

require('dotenv').config();


const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID; // your clientId
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
const SPOTIFY_REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI; // Your redirect uri

const SPOTIFY_URL_NOW_PLAYING = "https://api.spotify.com/v1/me/player/currently-playing?additional_types=track,episode";

const SPOTIFY_URL_RECENTLY_PLAY = "https://api.spotify.com/v1/me/player/recently-played?limit=10";
const SPOTIFY_URL_GENERATE_TOKEN = "https://accounts.spotify.com/api/token";
const SPOTIFY_URL_USER_INFO = "https://api.spotify.com/v1/me";



/*
const client_id = process.env.SPOTIFY_CLIENT_ID; // your clientId
const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI; // Your redirect uri
console.log("client_id", client_id);

const generateRandomString = (length) => {
  return require('crypto')
  .randomBytes(60)
  .toString('hex')
  .slice(0, length);
}

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());

app.get('/api/v1/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-currently-playing';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/api/v1/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter
  let retVal;
  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me/player/currently-playing?market=ES&additional_types=track',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          if (!error && response.statusCode === 200) {
            // send Spotify data back to the client
            res.json({ name: body.item.name, artists: body.item.artists, img: body.item.album.images[0].url}); // send the response as JSON
          } else {
            // handle error
            res.status(response.statusCode).json({ error: 'Failed to fetch data from Spotify API' });
          }
          // console.log("song name", body.item.name);
          // console.log("artists", body.item.artists);
          // console.log("song image", body.item.album.images[0].url);
                  
        });
        
        

      } else {
        res.status(response.statusCode).json({ error: 'Failed to fetch access token from Spotify API' });
        // res.redirect('/#' +
        //   querystring.stringify({
        //     error: 'invalid_token'
        //   }));
      }
    });
    
  }
    
});

app.get('/refresh_token', function(req, res) {

  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')) 
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token,
          refresh_token = body.refresh_token;
      res.send({
        'access_token': access_token,
        'refresh_token': refresh_token
      });
    }
  });
});

console.log('Listening on 8888');
app.listen(8888);

*/