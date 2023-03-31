// import './App.css';
import './styles/App.css';
import './styles/Planets.css';
import './styles/Mercury.css';
import './styles/Venus.css';
import './styles/Earth.css';
import './styles/Mars.css';
import './styles/Jupiter.css';
import './styles/Saturn.css';
import './styles/Uranus.css';
import './styles/Neptune.css';
import './styles/Pluto.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Planet from './components/Planet';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/planet/:name' element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
