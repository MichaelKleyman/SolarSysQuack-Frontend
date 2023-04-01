import '../styles/Moons.css';

const Moons = ({ moons }) => {
  console.log(moons);
  return (
    <div>
      <h1 className='title'>Moons</h1>
      <section className='moons-container'>
        {moons.length ? (
          moons.map((moon, index) => (
            <div key={index} className='moon'>
              <p className='moon-name'>
                Name: <span className='moon-info'>{moon.name}</span>
              </p>
              <p className='moon-name'>
                Diameter: <span className='moon-info'>{moon.diameter}</span>
              </p>
              <p className='moon-name'>
                History: <span className='moon-info'>{moon.history}</span>
              </p>
            </div>
          ))
        ) : (
          <div>No Moons</div>
        )}
      </section>
    </div>
  );
};

export default Moons;
