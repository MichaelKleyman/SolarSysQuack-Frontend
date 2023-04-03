import '../styles/Overview.css';
import { VscSourceControl } from 'react-icons/vsc';
import Button from '@mui/material/Button';

const Overview = ({ overview, name }) => {
  return (
    <div className='overview-container'>
      <h1 className='title'>Overview</h1>
      <a
        className='source'
        href={`https://solarsystem.nasa.gov/planets/${name?.toLowerCase()}/overview/`}
        target='_blank'
        rel='noreferrer'
      >
        <Button variant='contained'>
          <VscSourceControl style={{ paddingRight: '1rem' }} />
          Source
        </Button>
      </a>
      <p className='overview'>{overview}</p>
    </div>
  );
};

export default Overview;
