import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { useCats } from '../contexts/CatsContext';
import CatCard from './CatCard';
import './../App.css';

const KittenGallery = () => {
  const location = useLocation();
  const [filters, setFilters] = useState({colour: [], father: [], mother: [], status: []});
  var cats = useCats();
  var filteredCats = cats.filter((cat) => 
    filters.colour.includes(cat.colour)
    && filters.father.includes(cat.father)
    && filters.mother.includes(cat.mother)
    && filters.status.includes(cat.status));
  
  if (cats) {
      cats = cats.kittens.filter((cat) => cat.status == 'available');
      setFilters({colour: ['silver', 'brown'], father: [cats.parents.filter((cat) => cat.sex == 'male')], mother: [cats.parents.filter((cat) => cat.sex == 'female')], status: ['available']});
  } else {
      cats = [];
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  }
  
  return (
    <>
      <Accordion className='filter-accordion' defaultActiveKey='1'>
        <Accordion.Item className='accordion-item' eventKey='0'>
            <Accordion.Header className='accordion-header'>
              <p className='accordion-header-text'>
                Filter kittens
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <label>
                {`Available kittens: `}
                <input type="checkbox" name="status" value="available" onChange={handleChange} checked />
              </label>
              <label>
                {`Reserved kittens: `}
                <input type="checkbox" name="status" value="reserved" onChange={handleChange} />
              </label>
              <label>
                {`Graduated kittens: `}
                <input type="checkbox" name="status" value="graduated" onChange={handleChange} />
              </label>
              
              <br/>

              <label>
                {`Silver: `}
                <input type="checkbox" name="colour" value="silver" onChange={handleChange} />
              </label>
              <label>
                {`Brown: `}
                <input type="checkbox" name="colour" value="brown" onChange={handleChange} />
              </label>
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className='gallery-container'>
        {filteredCats.map((cat) => {
          return (
            <CatCard key={cat.id} cat={cat} size='small' />
          );
        })}
      </div>
    </>
  );
};

export default KittenGallery;