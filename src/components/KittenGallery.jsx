import { useState, useEffect } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { useCats } from '../contexts/CatsContext';
import { capitalize } from './Functions';
import CatCard from './CatCard';
import Checkbox from './Checkbox';
import './../App.css';

const KittenGallery = () => {
  var cats = useCats();
  var kittens = [];
  var parents = [];
  const [filters, setFilters] = useState({colour: [], father: [], mother: [], status: [], sex: []});
  const colours = ['silver', 'brown'];
  const statuses = ['available', 'reserved', 'graduated'];
  const sexes = ['male', 'female'];
  
  if (cats) {
      kittens = cats.kittens;
      parents = cats.parents;
  }

  useEffect(() => {
    setFilters({colour: colours, father: parents.filter((cat) => cat.sex === 'male').map((cat) => {return cat.name}), mother: parents.filter((cat) => cat.sex === 'female').map((cat) => {return cat.name}), status: ['available'], sex: sexes});
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
      setFilters({colour: [], father: [], mother: [], status: [], sex: []});
    } else {
      setFilters({colour: colours, father: parents.filter((cat) => cat.sex === 'male').map((cat) => {return cat.name}), mother: parents.filter((cat) => cat.sex === 'female').map((cat) => {return cat.name}), status: statuses, sex: sexes});
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
              {statuses.map((status) => {
                return (
                  <Checkbox key={status} label={capitalize(status)} name='status' value={status} handleChange={handleChange} checked={filters['status'].includes(status)} />
                )
              })}
              <br/>
              {colours.map((colour) => {
                return (
                  <Checkbox key={colour} label={capitalize(colour)} name='colour' value={colour} handleChange={handleChange} checked={filters['colour'].includes(colour)} />
                )
              })}
              <br/>
              {sexes.map((sex) => {
                return (
                  <Checkbox key={sex} label={capitalize(sex)} name='sex' value={sex} handleChange={handleChange} checked={filters['sex'].includes(sex)} />
                )
              })}
  
              <div className='parent-accordions-container'>
                <Accordion className='parent-accordion'>
                  <Accordion.Item eventKey={0}>
                    <Accordion.Header className='accordion-header'>
                      <p className='accordion-header-text'>Father</p>
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
                <Accordion className='parent-accordion'>
                  <Accordion.Item eventKey={0}>
                    <Accordion.Header className='accordion-header'>
                      <p className='accordion-header-text'>Mother</p>
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
          && filters.status.includes(cat.status)
          && filters.sex.includes(cat.sex))
          .sort((a, b) => a.date > b.date ? -1 : 1)
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