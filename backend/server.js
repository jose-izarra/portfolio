const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require('dotenv').config()

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;


app.get('/login', (req, res) => {
    const scopes = 'user-read-recently-played';
    res.redirect(`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${SPOTIFY_REDIRECT_URI}&scope=${scopes}`)
});


app.get('/callback', async (req, res) => {
    const { code } = req.query;

    try {
        const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', {
            grant_type: 'authorization_code',
            code: "code",
            redirect_uri: SPOTIFY_REDIRECT_URI,
            client_id: SPOTIFY_CLIENT_ID,
            client_secret: SPOTIFY_CLIENT_SECRET,
        });

        const accessToken = tokenResponse.data.access_token;

        const recentlyPlayed = await getRecentlyPlayed(accessToken);

        res.json(recentlyPlayed);

    } catch (e) {
        console.error("Error exchanging authorization code for access token:", e);
        res.status(500).send('Internal Server Error');
    }
    
});

const getRecentlyPlayed = async (accessToken) => {
    try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
            headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    return response.data.items;
    } catch (e) {
        console.error("Error fetching recently played songs:", e);
        throw e;
    }
}



const PORT = 3005;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    // console.log(SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI, SPOTIFY_CLIENT_SECRET)
});