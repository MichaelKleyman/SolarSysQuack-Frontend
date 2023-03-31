import React from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { BiArrowBack } from 'react-icons/bi';

const Planet = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  return (
    <div>
      <section className='planet-image'>
        <div className='card2'>
          <div className='planet-detail'>
            <h4 className='planet-name'>{name}</h4>
          </div>
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
      <button
        style={{ border: 'none' }}
        className='go-back'
        onClick={() => navigate('/')}
      >
        <BiArrowBack size={30} style={{ paddingRight: '1rem' }} />
        Go back
      </button>
      <p className='name'>{name}</p>
      {/* <div id={`${name}`}></div> */}
    </div>
  );
};

export default Planet;
