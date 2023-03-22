import AccordionMenu from '../components/AccordionMenu';
import NewsList from '../lists/NewsList';
import './../App.css';

const News = () => {
  return (
    <AccordionMenu items={NewsList.sort((a, b) => a.date > b.date ? -1 : 1)}/>
  );
};

export default News;