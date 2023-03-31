import React from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { BiArrowBack } from 'react-icons/bi';

const Planet = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  return (
    <div>
      <button
        style={{ border: 'none' }}
        className='go-back'
        onClick={() => navigate('/')}
      >
        <BiArrowBack size={30} style={{ paddingRight: '1rem' }} />
        Go back
      </button>
      <p className='name'>{name}</p>
      <div id={`${name}`}></div>
    </div>
  );
};

export default Planet;
