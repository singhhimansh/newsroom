import { getBaseDomain, prittifyTime } from "@/utils/common.utils";
import React from "react";

interface NewsTileTypes {
  news: any;
  srno: number;
}

// {
//     "by": "HipstaJules",
//     "descendants": 0,
//     "id": 42107278,
//     "kids": [
//         42107415
//     ],
//     "score": 1,
//     "time": 1731334788,
//     "title": "Guide to SaaS Metrics",
//     "type": "story",
//     "url": "https://equals.com/guides/saas-metrics/"
// }

const NewsTile: React.FC<NewsTileTypes> = ({ news, srno }) => {
  return (
    <div className="news-item">
    <span>{srno}.</span>
    {/* <NewsTile news={news} /> */}
 
    <div className="newsTile-container">
      <h4>
        <a href={news.url}>{news.title}</a>
        <span className="newsTile-baseurl">{ news.url ? '('+getBaseDomain(news.url)+')':''}</span>
      </h4>

      <p>
        {news.score} by <a href={""}>{news.by}</a> {prittifyTime(news.time)} | hide | {news.kids?.length || 0} comments
      </p>
    </div>
    </div>
  );
};

export default NewsTile;
