import { useState, useEffect} from 'react';
import { useCats } from '../contexts/CatsContext';
import { filterKittens } from './Functions';
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
  
  return (
    <>
      <FilterAccordion handleChange={handleChange} toggleAll={toggleAll} filters={filters} options={{colours, statuses, sexes, parents}} />

      {(filters['status'].length === 0 || filters['colour'].length === 0 || filters['sex'].length === 0 || filters['father'].length === 0 || filters['mother'].length === 0) ?
        <div className='filter-warning selection-warning'>
            <h5>Please select at least one status, fur colour, gender, father, and mother to display kittens.</h5>
        </div>
        :
        filterKittens(kittens, filters).length === 0 &&
          <div className='filter-warning'>
            <h5>No kittens match the current selection.</h5>
          </div> 
      }

      <div className='gallery-container'> 
        {filterKittens(kittens, filters).sort((a, b) => a.date > b.date ? -1 : 1)
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