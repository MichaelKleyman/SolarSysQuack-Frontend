import '../styles/Overview.css';

const Overview = ({ overview }) => {
  return (
    <div className='overview-container'>
      <h1 className='title'>Overview</h1>
      <p className='overview'>{overview}</p>
    </div>
  );
};

export default Overview;
