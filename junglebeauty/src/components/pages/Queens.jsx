import CatProfile from './CatProfile';
import CatCard from '../CatCard';
import CatList from '../CatList';
import './../../App.css';

const Queens = () => {
    return (
      <div className='card-container'>
      {CatList.filter(cat => cat.type == 'queen').map((cat) => {
        return (
          <CatCard key={cat.id} cat={cat}/>
        )
      })}
    </div>
    );
  };

export default Queens;