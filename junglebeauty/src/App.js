import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home.component';
import Navigation from './components/navigation/navigation.component';
import Footer from './components/footer/footer.component';
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

      <Routes>
        <Route index element={<Home/>}/>
        <Route path='kittens' element={<Kittens/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
};

export default App;
