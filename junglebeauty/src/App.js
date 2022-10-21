import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Homes/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

const Kittens = () => {
  return (
    <div>
      <h1>Kitten page</h1>
    </div>
  );
};

const App = () => {
  return (
    <div className='App'>
      <Navigation/>
      
      <div className='page-content'>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='kittens' element={<Kittens/>}/>
        </Routes>
      </div>

      <Footer/>
    </div>
  );
};

export default App;
