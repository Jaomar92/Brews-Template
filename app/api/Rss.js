import RSSParser from "rss-parser";

const parser = new RSSParser();

const parseRSSFeed = async (url) => {
  let articles = [];
  try {
    const feed = await parser.parseURL(url);
    feed.items.forEach((item) => {
      articles.push({
        creator: item.creator || "",
        title: item.title || "",
        link: item.link || "",
        pubDate: item.pubDate || "",
        content: item["content:encoded"] || "",
        contentSnippet: item["content:encodedSnippet"] || "",
        isoDate: item.isoDate || "",
      });
    });
  } catch (error) {
    console.error("Error parsing RSS feed:", error);
  }
  return articles;
};

export default async function handler(req, res) {
  const feedURL = process.env.NEWS_FEED_URL;
  if (!feedURL) {
    return res.status(400).json({ error: "RSS feed URL is not defined" });
  }

  const articles = await parseRSSFeed(feedURL);
  return res.status(200).json(articles);
}
