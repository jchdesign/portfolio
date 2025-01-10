import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import about_data from './data/about_data';

import HomeGrid from './components/HomeGrid';
import ProgramList from './components/ProgramList';
import Footer from './components/Footer';
import About from './pages/About';
import MultiSim_SimManager from './pages/MultiSim_SimManager';
import Nearby from './pages/Nearby';

function App() {
  console.log(about_data.image.Me);
  return (
    <Router>
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
        <Route path='MultiSim_SimManager' element={<MultiSim_SimManager/>}></Route>
        <Route path='Nearby' element={<Nearby/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
