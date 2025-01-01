import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import Grid from './components/Grid';
import ProgramList from './components/ProgramList';
import Footer from './components/Footer';
import About from './pages/About';
import MultiSim_SimManager from './pages/MultiSim_SimManager';
import Nearby from './pages/Nearby';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
          <main>
            <Grid/>
            <ProgramList/>
            <Footer/>
          </main>
        }>
        </Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='MultiSim_SimManager' element={<MultiSim_SimManager/>}></Route>
        <Route path='Nearby' element={<Nearby/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
