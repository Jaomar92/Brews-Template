import SubTitle from "@/components/shared/SubTitle";
import VideoCard from "./VideoCard";
import { Button } from "../ui/button";

const VideoData = [
  {
    title:
      "The Real Story of Pasta: China, Italy, and How Noodles Took Over the World",
    href: "https://www.youtube.com/watch?v=erphstyDPsA",
  },
  {
    title:
      "The Baguette Revolution: Banh Mi, Num Pang, and a Thai Sandwich Challenge",
    href: "https://www.youtube.com/watch?v=7BlOz6eaWE4&t=2322s",
  },
  {
    title:
      "How Salt Shaped Civilization: From the Roman Empire to the French Revolution",
    href: "https://www.youtube.com/watch?v=NRfcyuD7wNc&t=1545s",
  },
  {
    title:
      "The Epic Story of Rice: Gods, Conquests, and a Food Trip Through History",
    href: "https://www.youtube.com/watch?v=1ivJsV1A5oU",
  },
];

const Video = () => {
  return (
    <section>
      <SubTitle>Video</SubTitle>
      <Button variant={"link"} className="text-md px-0">
        See More Videos Here
      </Button>
      <div className="my-2">
        <hr />
      </div>
      <div className="my-2">
        {VideoData.map((item, i) => (
          <a
            href={item.href}
            target="_blank"
            key={i}
            className="flex items-center gap-3"
          >
            <VideoCard title={item.title} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Video;
