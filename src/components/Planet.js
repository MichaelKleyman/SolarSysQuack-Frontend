import React from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';

const Planet = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  return (
    <div className='planet1'>
      <button onClick={() => navigate('/')}>Go back</button>
      <p>{name}</p>
    </div>
  );
};

export default Planet;
