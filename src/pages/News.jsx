import { useState, useEffect } from 'react';
import { getList } from '../components/FirebaseFunctions';
import AccordionMenu from '../components/AccordionMenu';
import './../App.css';

const News = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
      const news = await getList('News-List.json');
      setNews(news);
  }
  
  useEffect(() => {
      getNews();
  }, []);

  return (
    <AccordionMenu items={news.sort((a, b) => a.date > b.date ? -1 : 1).slice(0, 10)}/>
  );
};

export default News;