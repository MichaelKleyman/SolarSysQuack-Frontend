import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { BiArrowBack } from 'react-icons/bi';
import { Client, BASE_URL } from './api';

const Planet = () => {
  const [planet, setPlanet] = useState(null);

  const navigate = useNavigate();
  const { name } = useParams();

  
  useEffect(() => {
    const getPlanetData = async () => {
      let planetData = await Client.get(`${BASE_URL}/quackBack/planet/moons/${name}`)
      console.log(planetData.data)
      setPlanet(planetData.data)
    }
    getPlanetData()
  }, [])

  return (
    <div>
      <section className='planet-title'>
        <h4 className='planet-name-page'>Let's "QUACK" About {name}</h4>
      </section>
      <section className='planet-image'>
        <div className='card2'>
          <div className='space'>
            <div className='solarSys' id={`${name}`}>
              <div className={`${name}Line1`}></div>
              <div className={`${name}Line2`}></div>
              <div className={`${name}Line3`}></div>
              <div className={`${name}Line4`}></div>
              <div className={`${name}Line5`}></div>
              <div className={`${name}Rings`}></div>
            </div>
          </div>
        </div>
      </section>
      <section className='planet-buttons'>
        <button
          style={{ border: 'none' }}
          className='go-back'
          onClick={() => navigate('/')}
        >
          <BiArrowBack size={30} style={{ paddingRight: '1rem' }} />
          Go back
        </button>
      </section>
      <section className='planet-detail'>
        <p className='name'>{name}</p>
        <p>{planet?.diameter}</p>
        <p>{planet?.mass}</p>
      </section>
      <section className='planet-moons'>
        {planet?.moons.map((moon, index) => (
          <div key={index}>
            <p className='moon-name'>Name: {moon.name}</p>
            <p>Diameter: {moon.diameter}</p>
            <p>History: {moon.history}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Planet;
