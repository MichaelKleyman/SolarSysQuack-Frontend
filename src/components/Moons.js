import React from 'react';

const Moons = ({ moons }) => {
  console.log(moons);
  return (
    <section className='planet-moons'>
      {moons.length ? (
        moons.map((moon, index) => (
          <div key={index}>
            <p className='moon-name'>Name: {moon.name}</p>
            <p>Diameter: {moon.diameter}</p>
            <p>History: {moon.history}</p>
          </div>
        ))
      ) : (
        <div>No Moons</div>
      )}
    </section>
  );
};

export default Moons;
