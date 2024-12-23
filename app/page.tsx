import Articles from "@/components/Home/Articles";
import Intro from "@/components/Home/Intro";
import News from "@/components/Home/News";
import Podcasts from "@/components/Home/Podcast";
import Videos from "@/components/Home/Videos";

export default function Home() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <Intro />
      <Articles />
      <Videos />
      <Podcasts />
      <News />
    </div>
  );
}
