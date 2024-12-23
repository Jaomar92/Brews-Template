interface CardSpeakProps {
  title: string;
  content: string;
}

const CardSpeak = ({ title, content }: CardSpeakProps) => {
  return (
    <div className="bg-neutral-300 dark:bg-neutral-800 rounded-md pt-6 relative shadow-md">
      <div className="bg-neutral-100 dark:bg-neutral-900 px-6 py-3 rounded-b-md">
        <p>
          {`"${title}"`}
          <br />
          <br />
          {content}
        </p>
      </div>
      <div className="absolute top-[6px] left-2">
        <div className="flex items-center gap-2">
          <div className="bg-red-500 rounded-full h-3 w-3 "></div>
          <div className="bg-green-500 rounded-full h-3 w-3 "></div>
          <div className="bg-yellow-500 rounded-full h-3 w-3 "></div>
        </div>
      </div>
    </div>
  );
};

export default CardSpeak;
