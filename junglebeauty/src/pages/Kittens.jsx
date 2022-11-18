import CatCardCarousel from '../components/CatCardCarousel';
import CatList from '../components/CatList';
import './../App.css';

const Kittens = () => {
  return (
    <>
      <div className='page-background'>
        <h2>JungleBeauty's kittens available for reservation</h2>
      </div>
      <CatCardCarousel cats={CatList.filter(cat => cat.status == 'available').sort((a, b) => a.date > b.date ? 1 : -1)}/>
    </>
  );
};

export default Kittens;