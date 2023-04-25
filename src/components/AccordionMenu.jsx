import { useContext } from 'react';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import { ConvertDate, GetReleaseDate } from './Functions';
import './../App.css';

const AccordionMenu = ({ items }) => {
  var itemID = -1;

  return (
    <Accordion className='accordion' alwaysOpen flush>
      {items.map((item) => {
        if (item.title && item.body) {
          itemID++;

          return (
              <Accordion.Item className='accordion-item' key={itemID} eventKey={itemID}>
                  <Accordion.Header className='accordion-header'>
                    <p className='accordion-header-text'>
                      {item.date && `${ConvertDate(item.date)}: `} 
                      {item.title} 
                      {item.type == 'litter' && ` - ready to go from ${ConvertDate(GetReleaseDate(item.date))}`}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    {item.body}
                  </Accordion.Body>
              </Accordion.Item>
          )
        }
      })}
    </Accordion>
  );
};

export default AccordionMenu;