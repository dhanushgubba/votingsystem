import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './about';
import Login from './login';
import Learnmore from './learnmore';
import Mobilevoting from './mobilevoting';
import Contact from './contact';
import Home1 from './home1';
import About1 from './about1';
import Voter from './voter';
import PoliticalParties from './politicalparties';
import ChangePassword from './changepassword';
import Admin from './admin';
import Voterregistration from './voterregistration';
import CandidateVote from './candidatevote';
import Electionvoting from './electionvoting';
import Home2 from './home2';
import Candidates from './candidates';
import Apolitical from './apolitical';
import Help from './help';

function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/learnmore' element={<Learnmore/>} />
        <Route path='/mobile' element={<Mobilevoting/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/home1' element={<Home1/>} />
        <Route path='/about1' element={<About1/>} />
        <Route path='/voter' element={<Voter/>} />
        <Route path='/politicalparties' element={<PoliticalParties/>} />
        <Route path='/changepassword' element={<ChangePassword/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/voterregistration' element={<Voterregistration/>} />
        <Route path='/candidatevote' element={<CandidateVote/>} />
        <Route path='/electionvoting' element={<Electionvoting/>} />
        <Route path='/home2' element={<Home2/>} />
        <Route path='/candidates' element={<Candidates/>} />
        <Route path='/apolitical' element={<Apolitical/>} />
        <Route path='/help' element={<Help/>} />
      </Routes>
    </BrowserRouter>

    // <div className='full-height'>
    //   <Home/>
    //   <Login/>
    // </div>
  );
}

ReactDOM.render(<Website/>, document.getElementById('root'));