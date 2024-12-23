import { Article } from "@/types/Article";

import { FaMedium } from "react-icons/fa";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const handleCardClick = () => {
    window.open(article.link, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      onClick={handleCardClick}
      className="my-2 px-3 py-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg shadow-md cursor-pointer hover:bg-neutral-200/60 hover:shadow-lg hover:dark:bg-neutral-800 transition-all duration-200 ease-linear"
    >
      <div className="flex items-center gap-4">
        <div className="bg-neutral-950 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-950 rounded-lg">
          <FaMedium className="text-7xl" />
        </div>
        <div>
          <h3 className="text-neutral-700 dark:text-neutral-100 text-lg font-roboto">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            Published on: {new Date(article.pubDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </article>
  );
}
