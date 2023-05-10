import { useContext } from 'react';
import { Link } from 'react-router-dom';
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
                      {(item.type === 'litter' && item.date) && ` - ready to go from ${ConvertDate(GetReleaseDate(item.date))}`}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    {item.body}
                    {(item.king && item.queen) && <p>King: <Link to='/kings' state={item.king}>{item.king}</Link>, Queen: <Link to='/queens' state={item.queen}>{item.queen}</Link></p>}
                  </Accordion.Body>
              </Accordion.Item>
          )
        }
      })}
    </Accordion>
  );
};

export default AccordionMenu;