import CatProfile from './CatProfile';
import CatCard from '../CatCard';
import CatList from '../CatList';
import './../../App.css';

const Kittens = () => {
  
  return (
    <div className='card-container'>
      {CatList.map((cat) => {
        return (
          <CatCard cat={cat}/>
        )
      })}
    </div>
  );
};

export default Kittens;