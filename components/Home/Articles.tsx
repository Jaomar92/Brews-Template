import React, { Suspense } from "react";
import SubTitle from "../shared/SubTitle";
import { Button } from "../ui/button";
import ArticleList from "./ArticleList";

const Articles = () => {
  return (
    <section>
      <div>
        <SubTitle>Articles By Imhunterand</SubTitle>
        <a href="https://pwn0sec.medium.com/" target="_blank">
          <Button variant={"link"} className="text-md px-0">
            See All Articles Here
          </Button>
        </a>
      </div>
      <div className="my-2 border-t py-3">
        <Suspense fallback={<div>Loading articles...</div>}>
          <ArticleList />
        </Suspense>
      </div>
    </section>
  );
};

export default Articles;
