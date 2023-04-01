import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { BiArrowBack } from 'react-icons/bi';
import { Client, BASE_URL } from './api';
import starsImg from '../images/stars.jpg';

const Planet = () => {
  const [planet, setPlanet] = useState(null);

  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    const getPlanetData = async () => {
      let planetData = await Client.get(
        `${BASE_URL}/quackBack/planet/moons/${name}`
      );
      console.log(planetData.data);
      setPlanet(planetData.data);
    };
    getPlanetData();
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: 'rgb(0 0 0 / 0.8)' }}>
        <img className='planet-background' src={starsImg} alt='background' />
        <button className='go-back' onClick={() => navigate('/')}>
          <BiArrowBack size={30} style={{ paddingRight: '1rem' }} />
          Go back
        </button>
        <section className='planet-title'>
          <h4 className='planet-name-page'>
            Let's "QUACK" About <span style={{ color: 'blue' }}>{name}</span>
          </h4>
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
        <section className='planet-buttons'></section>
        <section className='planet-detail-container'>
          <div>
            <p className='description-label'>Planet Mass</p>
            <p className='planet-detail'>{planet?.mass}</p>
          </div>
          <div>
            <p className='description-label'>Equatorial Diameter</p>
            <p className='planet-detail'>{planet?.diameter}</p>
          </div>
          <div>
            <p className='description-label'>Distance From Sun</p>
            <p className='planet-detail'>{planet?.distance}</p>
          </div>
          <div>
            <p className='description-label'>Planet Type</p>
            <p className='planet-detail'>{planet?.category}</p>
          </div>
        </section>
      </div>
      <div className='mini-navbar'>
        <p>Facts</p>
        <p>Moons</p>
      </div>
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
