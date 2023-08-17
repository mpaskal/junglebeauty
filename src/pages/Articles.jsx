import AccordionMenu from '../components/AccordionMenu';
import ArticleList from '../lists/ArticleList';
import './../App.css';

const Articles = () => {
  return (
    <>
        <div className='page-background'>
            <h1 className='page-subheader'>Useful articles written by Junglebeauty Bengal Cattery</h1>
        </div>

        <AccordionMenu items={ArticleList}/>
    </>
  );
};

export default Articles;