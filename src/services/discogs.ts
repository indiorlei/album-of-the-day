const DISCOGS_API_URL = "https://api.discogs.com";
const DISCOGS_TOKEN = "DnMYAayLseBhxoQnnJuTPanXTAneSkQkSxoSOiMS";

export async function searchAlbumCover(
  artist: string,
  title: string
): Promise<string> {
  try {
    const query = `${artist} ${title}`.replace(/[^\w\s]/gi, "").trim();
    const response = await fetch(
      `${DISCOGS_API_URL}/database/search?q=${encodeURIComponent(
        query
      )}&type=release&format=album&per_page=1&token=${DISCOGS_TOKEN}`,
      {
        headers: {
          "User-Agent": "AlbumGiveaway/1.0",
        },
      }
    );

    const data = await response.json();

    if (data.results && data.results.length > 0) {
      return (
        data.results[0].cover_image ||
        `https://picsum.photos/300/300?random=${Math.floor(
          Math.random() * 1000
        )}`
      );
    }

    return `https://picsum.photos/300/300?random=${Math.floor(
      Math.random() * 1000
    )}`;
  } catch (error) {
    return `https://picsum.photos/300/300?random=${Math.floor(
      Math.random() * 1000
    )}`;
  }
}
