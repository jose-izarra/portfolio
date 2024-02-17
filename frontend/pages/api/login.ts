import { NextApiRequest, NextApiResponse } from 'next';
const querystring = require('querystring');


var client_id = process.env.SPOTIFY_CLIENT_ID;
var redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
const scope = 'user-read-currently-playing';
const stateKey = 'spotify_auth_state';

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
    const state = generateRandomString(16);
    
    const AUTH_URL = 'https://accounts.spotify.com/authorize?' 
        + querystring.stringify({
                response_type: 'code',
                client_id: client_id,
                scope: scope,
                redirect_uri: redirect_uri,
                state: state
            });
        
    // res.redirect(AUTH_URL).send(200);
    res.status(200).json({ AUTH_URL});
}




const generateRandomString = (length: number) => {
    return require('crypto')
      .randomBytes(length)
      .toString('hex')
      .slice(0, length);
}