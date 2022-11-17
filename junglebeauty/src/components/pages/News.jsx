import AccordionMenu from '../AccordionMenu';
import NewsList from '../NewsList';
import './../../App.css';

const News = () => {
  return (
    <AccordionMenu items={NewsList}/>
  );
};

export default News;