import { useState, useEffect } from 'react';
import { useCats } from '../contexts/CatsContext';
import CatCard from './CatCard';
import FilterAccordion from './FilterAccordion';
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
      filterArray = filterArray.filter(item => item !== value);
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
      <FilterAccordion handleChange={handleChange} toggleAll={toggleAll} filters={filters} options={{colours, statuses, sexes, parents}} />

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