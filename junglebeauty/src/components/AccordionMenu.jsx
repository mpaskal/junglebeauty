import { Accordion } from 'react-bootstrap';
import './../App.css';

const AccordionMenu = ({ items }) => {
  var item_id = -1;

  return (
    <Accordion className='accordion' defaultActiveKey='0'>
      {items.map((item) => {
        console.log(item);
        item_id++;
        return (
            <Accordion.Item eventKey={item_id}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
        )
      })}
    </Accordion>
  );
};

export default AccordionMenu;