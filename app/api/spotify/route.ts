export async function GET() {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!client_id || !client_secret || !refresh_token) {
    return Response.json({ error: "Missing Spotify credentials" }, { status: 500 });
  }

  try {
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      })
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      throw new Error(tokenData.error || 'Failed to refresh token');
    }

    const spotifyResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`
      }
    });

    if (spotifyResponse.status === 204) {
      return Response.json({ isPlaying: false, track: null });
    }

    if (!spotifyResponse.ok) {
      throw new Error('Failed to fetch currently playing track');
    }

    const data = await spotifyResponse.json();

    if (!data.item) {
      return Response.json({ isPlaying: false, track: null });
    }

    const track = {
      name: data.item.name,
      artist: data.item.artists.map((artist: { name: string }) => artist.name).join(', '),
      album: data.item.album.name,
      albumArt: data.item.album.images[0]?.url,
      url: data.item.external_urls.spotify,
      isPlaying: data.is_playing,
      progressMs: data.progress_ms,
      durationMs: data.item.duration_ms
    };

    return Response.json({ isPlaying: data.is_playing, track });

  } catch (error) {
    console.error('Spotify API error:', error);
    return Response.json({ error: "Failed to fetch Spotify data" }, { status: 500 });
  }
}
