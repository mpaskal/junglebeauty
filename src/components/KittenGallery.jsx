import { useState, useEffect } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { useCats } from '../contexts/CatsContext';
import CatCard from './CatCard';
import Checkbox from './Checkbox';
import './../App.css';

const KittenGallery = () => {
  var cats = useCats();
  var kittens = [];
  var parents = [];
  const [filters, setFilters] = useState({colour: [], father: [], mother: [], status: []});
  
  if (cats) {
      kittens = cats.kittens;
      parents = cats.parents;
  }

  useEffect(() => {
    setFilters({colour: ['silver', 'brown'], father: parents.filter((cat) => cat.sex === 'male').map((cat) => {return cat.name}), mother: parents.filter((cat) => cat.sex === 'female').map((cat) => {return cat.name}), status: ['available']});
  }, [cats])

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

  const toggleAll = () => {
    if (filters['colour'].length > 0 || filters['father'].length > 0 || filters['mother'].length > 0 || filters['status'].length > 0) {
      setFilters({colour: [], father: [], mother: [], status: []});
    } else {
      setFilters({colour: ['silver', 'brown'], father: parents.filter((cat) => cat.sex === 'male').map((cat) => {return cat.name}), mother: parents.filter((cat) => cat.sex === 'female').map((cat) => {return cat.name}), status: ['available']});
    }
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
              <Checkbox label='Available kittens' name='status' value='available' handleChange={handleChange} checked={filters['status'].includes('available')} />
              <Checkbox label='Reserved kittens' name='status' value='reserved' handleChange={handleChange} checked={filters['status'].includes('reserved')} />
              <Checkbox label='Graduated kittens' name='status' value='graduated' handleChange={handleChange} checked={filters['status'].includes('graduated')} />
              <br/>
              <Checkbox label='Silver' name='colour' value='silver' handleChange={handleChange} checked={filters['colour'].includes('silver')} />
              <Checkbox label='Brown' name='colour' value='brown' handleChange={handleChange} checked={filters['colour'].includes('brown')} />
              <br/>
  
              <div className='parent-accordions-container'>
                <Accordion className='parent-accordion' defaultActiveKey='1'>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                      <p>Father</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      {parents.filter((cat) => cat.sex === 'male').map((cat) => {
                        return (
                          <Checkbox key={cat.id} label={cat.name} name='father' value={cat.name} handleChange={handleChange} checked={filters['father'].includes(cat.name)} />
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
                      {parents.filter((cat) => cat.sex === 'female').map((cat) => {
                        return (
                          <Checkbox key={cat.id} label={cat.name} name='mother' value={cat.name} handleChange={handleChange} checked={filters['mother'].includes(cat.name)} />
                        )
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className='buttons-container'>
                <Button className='form-button' onClick={toggleAll}>Check/Uncheck All</Button>
              </div>
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className='gallery-container'>
        {kittens.filter((cat) => 
          filters.colour.includes(cat.colour)
          && filters.father.includes(cat.father)
          && filters.mother.includes(cat.mother)
          && filters.status.includes(cat.status))
          .sort((a, b) => a.status > b.status || a.date > b.date ? 1 : -1)
          .map((cat) => {
            return (
              <CatCard key={cat.id} cat={cat} size='small' />
            );
        })}
      </div>
    </>
  );
};

export default KittenGallery;