import AccordionMenu from '../components/AccordionMenu';
import QuestionList from '../lists/QuestionList';
import './../App.css';

const FAQ = () => {
  return (
    <AccordionMenu items={QuestionList}/>
  );
};

export default FAQ;