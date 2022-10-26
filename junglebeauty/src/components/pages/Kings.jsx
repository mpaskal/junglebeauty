import CatProfile from './CatProfile';
import CatCard from '../CatCard';
import CatList from '../CatList';
import './../../App.css';

const Kings = () => {
    return (
      <div className='card-container'>
      {CatList.filter(cat => cat.type == 'king').map((cat) => {
        return (
          <CatCard cat={cat}/>
        )
      })}
    </div>
    );
  };

export default Kings;