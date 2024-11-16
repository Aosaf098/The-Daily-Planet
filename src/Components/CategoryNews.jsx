import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-xl mb-2 lg:text-left text-center">
            Daily Planet Home
          </h3>
          <p className="font-normal text-gray-500">
            {news.length} news found in this category
          </p>
        </div>
        <div>
          {news.map((singleNews, idx) => (
            <NewsCard key={idx} singleNews={singleNews} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryNews;
