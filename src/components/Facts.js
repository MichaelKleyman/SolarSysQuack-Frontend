import '../styles/Facts.css';

const Facts = ({ planet }) => {
  const { factOne, factTwo, factThree } = planet;

  return (
    <div>
      <div className='facts-container'>
        <div className='fact'>
          <p className='fact-count'>Fact One</p>
          {factOne}
        </div>
        <div className='fact'>
          <p className='fact-count'>Fact Two</p>
          {factTwo}
        </div>
        <div className='fact'>
          <p className='fact-count'>Fact Three</p>
          {factThree}
        </div>
      </div>
    </div>
  );
};

export default Facts;
