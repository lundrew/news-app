import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `https://bloomberg-market-and-financial-news.p.rapidapi.com/news/list`,
    headers: {
      "X-RapidAPI-Key": "98653e67e7mshc859dcc0d97cc13p137ae4jsn85b99419f5d3",
      "X-RapidAPI-Host": "bloomberg-market-and-financial-news.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    const response = await axios.request(options);

    const modules = response.data.modules;

    const mappedStories = modules.flatMap((module) => {
      const stories = module.stories;
      return stories.map((story) => ({
        id: story.id,
        title: story.title,
        summary: story.autoGeneratedSummary,
        published: story.published,
        byline: story.byline,
      }));
    });

    setData(mappedStories);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;