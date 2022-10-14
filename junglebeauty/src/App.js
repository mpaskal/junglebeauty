import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home.component';
import Navigation from './components/navigation/navigation.component';

const Kittens = () => {
  return (
    <div>
      <h1>Kitten page</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='kittens' element={<Kittens/>}/>
      </Route>
    </Routes>
  );
};

export default App;
