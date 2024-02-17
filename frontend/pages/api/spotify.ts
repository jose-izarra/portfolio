import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';



const URL = 'https://api.spotify.com/v1/me/player/currently-playing?additional_types=track'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await axios.get(URL, {
    headers: {
      'Authorization': `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`
    }
  })
}





