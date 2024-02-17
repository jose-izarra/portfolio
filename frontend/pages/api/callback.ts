import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import querystring from 'querystring';


const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI
const TOKEN_URL = 'https://accounts.spotify.com/api/token'



export default async function handler( req: NextApiRequest, res: NextApiResponse ) {

    var code = req.query.code as string || null;
    var state = req.query.state as string || null;

    if (state === null) {
        res.redirect('/#' +
        querystring.stringify({
            error: 'state_mismatch'
        }));
    } else {
    const authOptions = {
        url: TOKEN_URL,
        form: {
          grant_type: 'authorization_code',
          redirect_uri: REDIRECT_URI,
          code: code
        },
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
        },
        json: true
      }

    try {
      const response = await axios.post(authOptions.url, querystring.stringify(authOptions.form), 
                      { headers: authOptions.headers 
      });
      
      const { access_token, refresh_token } = response.data;
      res.status(200).json({ access_token, refresh_token });
    } catch (e) {
      console.log('error exchanging token', e);
      res.status(500).json({ error: 'internal server error' });
    }
   
  }
}