// lib/spotifyAuth.js

import axios from 'axios';
import crypto from 'crypto';
import querystring from 'querystring';
import { setCookie, parseCookies, destroyCookie } from 'nookies'; // Using Next.js's built-in cookie handling

const generateRandomString = (length) => {
  return crypto
    .randomBytes(length)
    .toString('hex')
    .slice(0, length);
};

const stateKey = 'spotify_auth_state';

export const getAuthorizationUrl = () => {
  const state = generateRandomString(16);
  setCookie(null, stateKey, state, { path: '/' });

  // your application requests authorization
  const scope = 'user-read-private user-read-email user-read-currently-playing';
  return `https://accounts.spotify.com/authorize?${querystring.stringify({
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: scope,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    state: state,
  })}`;
};

export const handleCallback = async (code, state) => {
  const storedState = parseCookies()[stateKey];

  if (state === null || state !== storedState) {
    throw new Error('state mismatch');
  } else {
    destroyCookie(null, stateKey);

    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        grant_type: 'authorization_code',
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString('base64')}`,
      },
      json: true,
    };

    const response = await axios.post(authOptions.url, querystring.stringify(authOptions.form), {
      headers: authOptions.headers,
    });

    const { access_token, refresh_token } = response.data;

    const options = {
      url: 'https://api.spotify.com/v1/me/player/currently-playing?market=ES&additional_types=track',
      headers: { Authorization: `Bearer ${access_token}` },
      json: true,
    };

    // use the access token to access the Spotify Web API
    const responseData = await axios.get(options.url, { headers: options.headers });

    return {
      access_token,
      refresh_token,
      currently_playing: responseData.data,
    };
  }
};

export const refreshAccessToken = async (refreshToken) => {
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString('base64')}`,
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
    json: true,
  };

  const response = await axios.post(authOptions.url, querystring.stringify(authOptions.form), {
    headers: authOptions.headers,
  });

  return response.data.access_token;
};
