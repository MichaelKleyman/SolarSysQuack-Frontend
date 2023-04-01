import '../styles/Facts.css';
import { FcApproval } from 'react-icons/fc';

const Facts = ({ planet }) => {
  const { factOne, factTwo, factThree } = planet;

  return (
    <div>
      <h1 className='title'>Facts</h1>
      <div className='facts-container'>
        <div className='fact'>
          <p className='fact-count'>
            <FcApproval size={25} style={{ paddingRight: '1rem' }} />
            Fact One
          </p>
          <p>{factOne}</p>
        </div>
        <div className='fact'>
          <p className='fact-count'>
            <FcApproval size={25} style={{ paddingRight: '1rem' }} />
            Fact Two
          </p>
          <p>{factTwo}</p>
        </div>
        <div className='fact'>
          <p className='fact-count'>
            <FcApproval size={25} style={{ paddingRight: '1rem' }} />
            Fact Three
          </p>
          <p>{factThree}</p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
