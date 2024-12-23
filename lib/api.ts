export async function fetchMediumArticles() {
  try {
    // Using RSS to JSON conversion service to avoid CORS issues
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pwn0sec"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
}
