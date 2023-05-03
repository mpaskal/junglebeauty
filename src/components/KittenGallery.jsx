import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { useCats } from '../contexts/CatsContext';
import CatCard from './CatCard';
import Checkbox from './Checkbox';
import './../App.css';

const KittenGallery = () => {
  const location = useLocation();
  const [filters, setFilters] = useState({colour: [], father: [], mother: [], status: []});
  var cats = useCats();
  var kittens = [];
  var parents = [];
  
  if (cats) {
      kittens = cats.kittens.filter((cat) => cat.status == 'available');
      parents = cats.parents;
  }

  useEffect(() => {
    setFilters({colour: ['silver', 'brown'], father: parents.filter((cat) => cat.sex == 'male').map((cat) => {return cat.name}), mother: parents.filter((cat) => cat.sex == 'female').map((cat) => {return cat.name}), status: ['available']});
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    var filterArray = filters[name];
    if (filterArray.includes(value)) {
      filterArray = filterArray.filter(item => item != value);
    } else {
      filterArray.push(value);
    }
    setFilters({ ...filters, [name]: filterArray});
  }

  console.log(filters);
  
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
              <Checkbox label='Available kittens' name='status' value='available' changeHandler={handleChange} defaultCheck />
              <Checkbox label='Reserved kittens' name='status' value='reserved' changeHandler={handleChange} />
              <Checkbox label='Graduated kittens' name='status' value='graduated' changeHandler={handleChange} />
              <br/>
              <Checkbox label='Silver' name='colour' value='silver' changeHandler={handleChange} defaultCheck />
              <Checkbox label='Brown' name='colour' value='brown' changeHandler={handleChange} defaultCheck />
              <br/>
  
              <div className='parent-accordions-container'>
                <Accordion className='parent-accordion' defaultActiveKey='1'>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                      <p>Father</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      {parents.filter((cat) => cat.sex == 'male').map((cat) => {
                        return (
                          <Checkbox label={cat.name} name='father' value={cat.name} changeHandler={handleChange} defaultCheck />
                        )
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion className='parent-accordion' defaultActiveKey='1'>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                      <p>Mother</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      {parents.filter((cat) => cat.sex == 'female').map((cat) => {
                        return (
                          <Checkbox label={cat.name} name='mother' value={cat.name} changeHandler={handleChange} defaultCheck />
                        )
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className='gallery-container'>
        {kittens.filter((cat) => 
          filters.colour.includes(cat.colour)
          && filters.father.includes(cat.father)
          && filters.mother.includes(cat.mother)
          && filters.status.includes(cat.status)).map((cat) => {
          return (
            <CatCard key={cat.id} cat={cat} size='small' />
          );
        })}
      </div>
    </>
  );
};

export default KittenGallery;