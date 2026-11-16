export async function GET(request: Request) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret");

  if (secret !== process.env.SPOTIFY_AUTH_SECRET) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI || "";

  if (!client_id) {
    return Response.json({ error: "Missing Spotify client ID" }, { status: 500 });
  }

  const scopes = "user-read-currently-playing user-read-playback-state";
  const state = Math.random().toString(36).substring(7);

  const authUrl = new URL("https://accounts.spotify.com/authorize");
  authUrl.searchParams.append("response_type", "code");
  authUrl.searchParams.append("client_id", client_id);
  authUrl.searchParams.append("scope", scopes);
  authUrl.searchParams.append("redirect_uri", redirect_uri);
  authUrl.searchParams.append("state", state);

  return Response.redirect(authUrl.toString());
}
