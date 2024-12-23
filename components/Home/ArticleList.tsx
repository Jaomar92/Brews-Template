"use client";
import React, { useEffect, useState } from "react";
import { Article } from "@/types/Article";
import { fetchMediumArticles } from "@/lib/api";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await fetchMediumArticles();
        setArticles(data);
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to load articles";
        setError(errorMessage);
        console.error("Error loading articles:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadArticles();
  }, []);

  if (isLoading) {
    return <div>Loading articles...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-6">
      {articles.map((article, index) => (
        <ArticleCard key={article.link || index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
