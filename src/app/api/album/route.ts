import { NextRequest, NextResponse } from "next/server";
import { albums } from "@/data/albums";

const SPOTIFY_API_URL = "https://api.spotify.com/v1";
const DISCOGS_API_URL = "https://api.discogs.com";

interface SpotifyTokenResponse {
  access_token: string;
}

interface AlbumData {
  image: string;
  spotifyUrl: string;
  error?: string;
}

async function getSpotifyToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Spotify credentials not configured");
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  });

  if (!response.ok) {
    throw new Error("Failed to get Spotify token");
  }

  const data: SpotifyTokenResponse = await response.json();
  return data.access_token;
}

async function getDiscogsCover(artist: string, title: string): Promise<string> {
  const token = process.env.DISCOGS_TOKEN;

  if (!token) {
    return "";
  }

  try {
    const query = `${artist} ${title}`.replace(/[^\w\s]/gi, "").trim();
    const response = await fetch(
      `${DISCOGS_API_URL}/database/search?q=${encodeURIComponent(
        query
      )}&type=release&format=album&per_page=1&token=${token}`,
      {
        headers: {
          "User-Agent": "AlbumGiveaway/1.0",
        },
      }
    );

    if (!response.ok) {
      return "";
    }

    const data = await response.json();

    if (data.results?.length > 0) {
      return data.results[0].cover_image || "";
    }

    return "";
  } catch {
    return "";
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const artist = searchParams.get("artist");
    const title = searchParams.get("title");

    if (!artist || !title) {
      return NextResponse.json(
        { error: "Missing artist or title" },
        { status: 400 }
      );
    }

    const token = await getSpotifyToken();
    const query = `album:"${title}" artist:"${artist}"`;

    const response = await fetch(
      `${SPOTIFY_API_URL}/search?q=${encodeURIComponent(
        query
      )}&type=album&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Spotify API error");
    }

    const data = await response.json();

    if (data.albums?.items?.length > 0) {
      const album = data.albums.items[0];

      const albumTitle = album.name.toLowerCase();
      const albumArtist = album.artists[0]?.name.toLowerCase() || "";
      const normalizedTitle = title.toLowerCase();
      const normalizedArtist = artist.toLowerCase();

      const titleMatch =
        albumTitle.includes(normalizedTitle) ||
        normalizedTitle.includes(albumTitle);
      const artistMatch =
        albumArtist.includes(normalizedArtist) ||
        normalizedArtist.includes(albumArtist);

      if (titleMatch && artistMatch) {
        const spotifyImage = album.images?.[0]?.url
        console.log('Spotify found:', { title: album.name, artist: album.artists[0]?.name, hasImage: !!spotifyImage })
        
        let finalImage = spotifyImage
        if (!spotifyImage) {
          console.log('No Spotify image, trying Discogs...')
          finalImage = await getDiscogsCover(artist, title)
          console.log('Discogs result:', !!finalImage)
        }
        
        return NextResponse.json({
          image: finalImage || '',
          spotifyUrl: album.external_urls?.spotify || "",
        });
      }
    }

    console.log('No Spotify match found, trying Discogs only...')
    const discogsCover = await getDiscogsCover(artist, title);
    console.log('Final Discogs result:', !!discogsCover)
    
    return NextResponse.json({
      image: discogsCover || '',
      spotifyUrl: "",
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const randomIndex = Math.floor(Math.random() * albums.length);
    const album = albums[randomIndex];

    return NextResponse.json(album);
  } catch (error) {
    console.error("Random album error:", error);
    return NextResponse.json(
      { error: "Failed to get random album" },
      { status: 500 }
    );
  }
}
