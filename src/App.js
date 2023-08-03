import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CatsProvider } from './contexts/CatsContext';
import Home from './pages/Home';
import Queens from './pages/Queens';
import Kings from './pages/Kings';
import Kittens from './pages/Kittens';
import News from './pages/News';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import WhyChoose from './pages/WhyChoose';
import BuySellAgreement from './pages/BuySellAgreement';
import Price from './pages/Price';
import PrepareForKitten from './pages/PrepareForKitten';
import Visit from './pages/Visit';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <CatsProvider>
        <div className='App'>
          <Navigation />
          <div className='page-content'>
            <Routes>
              <Route exact index element={<Home />}/>
              <Route exact path='queens' element={<Queens />}/>
              <Route exact path='kings' element={<Kings />}/>
              <Route exact path='kittens' element={<Kittens />}/>
              <Route exact path='news' element={<News />}/>
              <Route exact path='faq' element={<FAQ />}/>
              <Route exact path='about-us' element={<About />}/>
              <Route exact path='contact' element={<Contact />}/>
              <Route exact path='why-choose-junglebeauty' element={<WhyChoose />}/>
              <Route exact path='buy-sell-agreement' element={<BuySellAgreement />}/>
              <Route exact path='price' element={<Price />}/>
              <Route exact path='preparing-for-coming-kitten' element={<PrepareForKitten />}/>
              <Route exact path='visit-junglebeauty' element={<Visit />}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </CatsProvider>
    </BrowserRouter>
  );
};

export default App;
