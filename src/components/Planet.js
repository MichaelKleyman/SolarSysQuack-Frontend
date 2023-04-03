/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { BiArrowBack } from 'react-icons/bi';
import { Client, BASE_URL } from './api';
import starsImg from '../images/stars.jpg';
import Moons from './Moons';
import Facts from './Facts';
import Overview from './Overview';

const Planet = () => {
  const [planet, setPlanet] = useState(null);
  const [overview, setOverview] = useState(true);
  const [facts, setFacts] = useState(false);
  const [moons, setMoons] = useState(false);

  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    const getPlanetData = async () => {
      let planetData = await Client.get(
        `${BASE_URL}/quackBack/planet/moons/${name}`
      );
      setPlanet(planetData.data);
    };
    getPlanetData();
  }, []);

  const handleClick = (name) => {
    if (name === 'overview') {
      setOverview(true);
      setFacts(false);
      setMoons(false);
    } else if (name === 'facts') {
      setOverview(false);
      setFacts(true);
      setMoons(false);
    } else if (name === 'moons') {
      setOverview(false);
      setFacts(false);
      setMoons(true);
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: 'rgb(0 0 0 / 0.6)' }}>
        <img className='planet-background' src={starsImg} alt='background' />
        <button className='go-back' onClick={() => navigate('/')}>
          <BiArrowBack size={30} style={{ paddingRight: '1rem' }} />
          Go back
        </button>
        <section className='planet-title'>
          <h4 className='planet-name-page'>
            Let's "QUACK" About{' '}
            <span style={{ color: 'rgb(188, 224, 255)' }}>{name}</span>
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
        <p
          className='mini-navbar-button'
          id={`${overview ? 'overview' : ''}`}
          onClick={() => handleClick('overview')}
        >
          Overview
        </p>
        <p
          className='mini-navbar-button'
          id={`${facts ? 'facts' : ''}`}
          onClick={() => handleClick('facts')}
        >
          Facts
        </p>
        <p
          className='mini-navbar-button'
          id={`${moons ? 'moons' : ''}`}
          onClick={() => handleClick('moons')}
        >
          Moons
        </p>
      </div>
      <div className='bottom-container'>
        {overview && (
          <Overview overview={planet?.overview} name={planet?.name} />
        )}
        {facts && <Facts planet={planet} />}
        {moons && <Moons moons={planet?.moons} />}
      </div>
    </div>
  );
};

export default Planet;
