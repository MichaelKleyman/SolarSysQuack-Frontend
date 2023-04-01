import '../styles/Facts.css';

const Facts = ({ planet }) => {
  const { factOne, factTwo, factThree } = planet;

  return (
    <div>
      <div className='facts-container'>
        <div className='fact'>
          <p className='fact-count'>Fact One</p>
          <p>{factOne}</p>
        </div>
        <div className='fact'>
          <p className='fact-count'>Fact Two</p>
          <p>{factTwo}</p>
        </div>
        <div className='fact'>
          <p className='fact-count'>Fact Three</p>
          <p>{factThree}</p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
