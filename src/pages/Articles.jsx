import AccordionMenu from '../components/AccordionMenu';
import QuestionList from '../lists/QuestionList';
import './../App.css';

const Articles = () => {
  return (
    <>
        <div className='page-background'>
            <h1 className='page-subheader'>Useful articles written by Junglebeauty Bengal Cattery</h1>
        </div>

        <AccordionMenu items={QuestionList}/>
    </>
  );
};

export default Articles;