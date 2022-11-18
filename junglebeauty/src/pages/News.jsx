import AccordionMenu from '../components/AccordionMenu';
import NewsList from '../components/NewsList';
import './../App.css';

const News = () => {
  return (
    <AccordionMenu items={NewsList}/>
  );
};

export default News;