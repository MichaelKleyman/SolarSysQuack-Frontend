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
import { useState, useEffect } from 'react';
import { Client, BASE_URL } from './components/api';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Planet from './components/Planet';

function App() {
  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    const getPlanetData = async () => {
      let planetData = await Client.get(`${BASE_URL}/quackBack/planet`);
      setPlanets(planetData.data);
    };
    getPlanetData();
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home planets={planets} />} />
        <Route path='/planet/:name' element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
