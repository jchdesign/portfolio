import {HashRouter, Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import about_data from './data/about_data';

import HomeGrid from './components/HomeGrid';
import ProgramList from './components/ProgramList';
import Footer from './components/Footer';
import About from './pages/About';
import MultiSim_SimManager from './pages/MultiSim_SimManager';
import Nearby from './pages/Nearby';
import Reflection from './pages/Reflection';
import Recollections from './pages/Recollections';
import OniriaHill from './pages/OniriaHill';
import DirtyLaundry from './pages/DirtyLaundry';
import ComingSoon from './pages/ComingSoon';
import SFParksRec from './pages/SFParksRec';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HashRouter basename='/'>
      <Routes>
        <Route exact path='/' element={
          <main>
            <HomeGrid/>
            <ProgramList/>
            <Footer/>
          </main>
        }>
        </Route>
        <Route path='/About' element={<About data={about_data}/>}></Route>
        <Route path='/MultiSim_SimManager' element={<MultiSim_SimManager/>}></Route>
        <Route path='/Nearby' element={<Nearby/>}></Route>
        <Route path='/Reflection' element={<Reflection/>}></Route>
        <Route path='/SFParksRec' element={<SFParksRec/>}></Route>
        <Route path='/Interlude' element={<ComingSoon/>}></Route>


        <Route path='/OniriaHill' element={<OniriaHill/>}></Route>
        <Route path='/DirtyLaundry' element={<DirtyLaundry/>}></Route>

        <Route path='/Recollections' element={<Recollections/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
