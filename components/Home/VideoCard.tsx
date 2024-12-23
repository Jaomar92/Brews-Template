import { BsYoutube } from "react-icons/bs";

interface VideoProps {
  title: string;
}

const VideoCard: React.FC<VideoProps> = ({ title }) => {
  return (
    <div className="my-2 px-3 py-4 w-full bg-neutral-50 dark:bg-neutral-900 rounded-lg shadow-md cursor-pointer hover:bg-neutral-200/60 hover:shadow-lg hover:dark:bg-neutral-800 transition-all duration-200 ease-linear">
      <div className="flex items-center gap-4">
        <div className="text-red-600">
          <BsYoutube className="text-7xl rounded-xl p-2" />
        </div>
        <div>
          <h3 className="text-neutral-700 dark:text-neutral-100 text-lg font-roboto">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
