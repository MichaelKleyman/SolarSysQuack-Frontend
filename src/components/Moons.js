import '../styles/Moons.css';
import { BsMoonStarsFill } from 'react-icons/bs';

const Moons = ({ moons }) => {
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
          <div>
            <div className='notfound-container'>
              <BsMoonStarsFill color='blue' style={{ paddingRight: '1rem' }} />
              No Moons On This Planet
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Moons;
