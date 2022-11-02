import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Queens from './components/pages/Queens';
import Kings from './components/pages/Kings';
import Kittens from './components/pages/Kittens';
import News from './components/pages/News';
import FAQ from './components/pages/FAQ';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import WhyChoose from './components/pages/WhyChoose';
import BuySellAgreement from './components/pages/BuySellAgreement';
import Price from './components/pages/Price';
import PrepareForKitten from './components/pages/PrepareForKitten';
import Visit from './components/pages/Visit';
import CatProfile from './components/pages/CatProfile';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CatList from './components/CatList';
import { GetCatURL } from './components/Functions';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navigation/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='queens' element={<Queens/>}/>
          <Route path='kings' element={<Kings/>}/>
          <Route path='kittens' element={<Kittens/>}/>
          <Route path='news' element={<News/>}/>
          <Route path='faq' element={<FAQ/>}/>
          <Route path='about-us' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='why-choose-junglebeauty' element={<WhyChoose/>}/>
          <Route path='buy-sell-agreement' element={<BuySellAgreement/>}/>
          <Route path='price' element={<Price/>}/>
          <Route path='preparing-fpr-coming-kitten' element={<PrepareForKitten/>}/>
          <Route path='visit-junglebeauty' element={<Visit/>}/>
          {CatList.filter(cat => cat.type == 'king' || cat.type == 'queen').map((cat) => {
            <Route path={`/${cat.type}-${cat.name}`} element={<CatProfile cat={cat}/>}/>
          })} 
        </Routes>
      <Footer/>
    </div>
  );
};

export default App;
