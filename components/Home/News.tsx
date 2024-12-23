import React from "react";
import SubTitle from "../shared/SubTitle";
import NewsCard from "./NewsCard";

const NewsFakeData = [
  {
    img_src:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAIAAACzhd1dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQkE0RTEwNEY1OTExMUUzQUY3QkM0QjlCOTY3MzQyNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQkE0RTEwNUY1OTExMUUzQUY3QkM0QjlCOTY3MzQyNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg1RjM1RTNGRjU4MDExRTNBRjdCQzRCOUI5NjczNDI1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg1RjM1RTQwRjU4MDExRTNBRjdCQzRCOUI5NjczNDI1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+i2DvYgAADJVJREFUeNrsXUtv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",
    alt: "test" /** can put anything Here */,
    title: "This is test Data",
    publication: "CNN INDONESIA",
    link: "https://www.cnnindonesia.com/teknologi/20221116133010-192-874507/data-pedulilindungi-tak-dienkripsi-pakar-sindir-beda-ucap-dan-fakta",
  },
  {
    img_src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Deutsche_Welle_symbol_2012.svg/1200px-Deutsche_Welle_symbol_2012.svg.png",
    alt: "test",
    title: "This is test Data",
    publication: "DW",
    link: "https://www.cnnindonesia.com/teknologi/20221116133010-192-874507/data-pedulilindungi-tak-dienkripsi-pakar-sindir-beda-ucap-dan-fakta",
  },
  {
    img_src:
      "https://cdn.freebiesupply.com/images/large/2x/vice-logo-transparent.png",
    alt: "test",
    title: "This is test Data",
    publication: "Vice",
    link: "https://www.cnnindonesia.com/teknologi/20221116133010-192-874507/data-pedulilindungi-tak-dienkripsi-pakar-sindir-beda-ucap-dan-fakta",
  },
  {
    img_src:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAIAAACzhd1dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQkE0RTEwNEY1OTExMUUzQUY3QkM0QjlCOTY3MzQyNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQkE0RTEwNUY1OTExMUUzQUY3QkM0QjlCOTY3MzQyNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg1RjM1RTNGRjU4MDExRTNBRjdCQzRCOUI5NjczNDI1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg1RjM1RTQwRjU4MDExRTNBRjdCQzRCOUI5NjczNDI1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+i2DvYgAADJVJREFUeNrsXUtv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",
    alt: "test",
    title: "This is test Data",
    publication: "CNN Indonesia",
    link: "https://www.cnnindonesia.com/teknologi/20221116133010-192-874507/data-pedulilindungi-tak-dienkripsi-pakar-sindir-beda-ucap-dan-fakta",
  },
  {
    img_src:
      "https://cdn.freebiesupply.com/images/large/2x/vice-logo-transparent.png",
    alt: "test",
    title: "This is test Data",
    publication: "Vice",
    link: "https://www.cnnindonesia.com/teknologi/20221116133010-192-874507/data-pedulilindungi-tak-dienkripsi-pakar-sindir-beda-ucap-dan-fakta",
  },
];

const News = () => {
  return (
    <section>
      <SubTitle>Liputan, Wawancara dan Publikasi</SubTitle>

      <div className="my-2">
        <hr />
      </div>
      <div className="space-y-2 my-3">
        {NewsFakeData.map((news, i) => (
          <a
            href={news.link}
            target="_blank"
            key={i}
            className="flex items-center gap-3"
          >
            <NewsCard
              title={news.title}
              host={news.img_src}
              publication={news.publication}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default News;
