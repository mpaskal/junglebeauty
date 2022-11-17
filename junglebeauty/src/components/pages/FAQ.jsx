import AccordionMenu from '../AccordionMenu';
import QuestionList from '../QuestionList';
import './../../App.css';

const FAQ = () => {
  return (
    <AccordionMenu items={QuestionList}/>
  );
};

export default FAQ;