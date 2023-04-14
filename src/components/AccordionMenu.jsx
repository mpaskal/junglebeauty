import { useContext } from 'react';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import { convertDate, getReleaseDate } from './Functions';
import './../App.css';

const AccordionMenu = ({ items }) => {
  var itemID = -1;

  return (
    <Accordion className='accordion' alwaysOpen flush>
      {items.map((item) => {
        itemID++;

        return (
            <Accordion.Item className='accordion-item' key={itemID} eventKey={itemID}>
                <Accordion.Header className='accordion-header'>
                  <p className='accordion-header-text'>
                    {item.date && `${convertDate(item.date)}: `} 
                    {item.title} 
                    {item.type == 'litter' && ` - ready to go from ${convertDate(getReleaseDate(item.date))}`}
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  {item.body}
                </Accordion.Body>
            </Accordion.Item>
        )
      })}
    </Accordion>
  );
};

export default AccordionMenu;