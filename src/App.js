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
              <Route index element={<Home />}/>
              <Route path='queens' element={<Queens />}/>
              <Route path='kings' element={<Kings />}/>
              <Route path='kittens' element={<Kittens />}/>
              <Route path='news' element={<News />}/>
              <Route path='faq' element={<FAQ />}/>
              <Route path='about-us' element={<About />}/>
              <Route path='contact' element={<Contact />}/>
              <Route path='why-choose-junglebeauty' element={<WhyChoose />}/>
              <Route path='buy-sell-agreement' element={<BuySellAgreement />}/>
              <Route path='price' element={<Price />}/>
              <Route path='preparing-for-coming-kitten' element={<PrepareForKitten />}/>
              <Route path='visit-junglebeauty' element={<Visit />}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </CatsProvider>
    </BrowserRouter>
  );
};

export default App;
