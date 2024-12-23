import { Article } from "@/types/Article";
import type { NextApiRequest, NextApiResponse } from "next";
import Parser from "rss-parser";
// Ensure you have this type defined

const MEDIUM_RSS_URL = "https://medium.com/feed/@pwn0sec";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(MEDIUM_RSS_URL);

    const articles: Article[] = feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      // Add other fields you need from the RSS feed
    }));

    res.status(200).json({ items: articles });
  } catch (error) {
    console.error("Error fetching Medium RSS feed:", error);
    res.status(500).json({ message: "Failed to fetch articles" });
  }
}
