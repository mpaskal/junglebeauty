import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import './../App.css';

const AccordionMenu = ({ items }) => {
  var item_id = -1;

  return (
    <Accordion className='accordion' defaultActiveKey='0' alwaysOpen flush>
      {items.map((item) => {
        item_id++;
        return (
            <Card key={item_id}>
                <Card.Header className='accordion-header'>
                  
                  <p className='accordion-header-text'>{item.title}</p>
                </Card.Header>
                <Card.Body className='accordion-item'>{item.body}</Card.Body>
            </Card>
        )
      })}
    </Accordion>
  );
};

export default AccordionMenu;