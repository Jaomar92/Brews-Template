import { Newspaper } from "lucide-react";

interface NewsProps {
  title: string;
  publication?: string;
  host?: string;
}

const NewsCard: React.FC<NewsProps> = ({ title, publication }) => {
  return (
    <div className="w-full px-3 py-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg shadow-md cursor-pointer hover:bg-neutral-200/60 hover:shadow-lg hover:dark:bg-neutral-800 transition-all duration-200 ease-linear">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Newspaper />
        </div>
        <div>
          <h3 className="text-neutral-700 dark:text-neutral-100 text-lg font-roboto">
            {title}
          </h3>
          <p>{publication}</p>
          {/* <p>{host}</p> */}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
