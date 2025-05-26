import {HashRouter, Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

import work_data from './data/work_data';
import film_data from './data/film_data';
import music_data from './data/music_data';
import about_data from './data/about_data';

import Home from './pages/Home';
import About from './pages/About';
import MultiSim_SimManager from './pages/MultiSim_SimManager';
import Nearby from './pages/Nearby';
import Reflection from './pages/Reflection';
import Recollections from './pages/Recollections';
import OniriaHill from './pages/OniriaHill';
import DirtyLaundry from './pages/DirtyLaundry';
import Interlude from './pages/Interlude';
import BrightSide from './pages/BrightSide';
import ComingSoon from './pages/ComingSoon';
import ProgramListCards from './components/ProgramListCards';
import ProgramListCardsLong from './components/ProgramListCardsLong';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HashRouter basename='/'>
      <Routes>
        <Route exact path='/' element={<Home/>}>
        </Route>
        <Route path='/About' element={<About data={about_data}/>}></Route>
        <Route path='/MultiSim_SimManager' element={<MultiSim_SimManager/>}></Route>
        <Route path='/Nearby' element={<Nearby/>}></Route>
        <Route path='/Reflection' element={<Reflection/>}></Route>
        <Route path='/Interlude' element={<Interlude/>}></Route>

        <Route path='/OniriaHill' element={<OniriaHill/>}></Route>
        <Route path='/DirtyLaundry' element={<DirtyLaundry/>}></Route>
        <Route path='/BrightSide' element={<BrightSide/>}></Route>

        <Route path='/Recollections' element={<Recollections/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
