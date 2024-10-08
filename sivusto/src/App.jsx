import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Kotisivu } from './Kotisivu';
import { About } from './About';
import { Projektit } from './projektit';


const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' Component={Kotisivu}/>
        <Route path='/projektit' Component={Projektit}/>
        <Route path='/kukaolen' Component={About}/>
      </Routes>
    </Router>
  )
}

export default App
