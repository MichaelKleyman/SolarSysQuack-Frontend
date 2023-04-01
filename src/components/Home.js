import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router';

const Home = ({ planets }) => {
  const [open, setOpen] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState({});
  const navigate = useNavigate();

  const handleClickOpen = (planet) => {
    setOpen(true);
    setSelectedPlanet(planet);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPlanet('');
  };

  const seePlanet = () => {
    navigate(`planet/${selectedPlanet.name}`);
  };

  return (
    <div className='main-page'>
      <div className='header'>
        <h1>Our Solar System</h1>
      </div>
      <div className='planets'>
        {planets?.map((planet, i) => (
          <div
            key={i}
            className='planet-border'
            onClick={() => handleClickOpen(planet)}
          >
            <div className='card'>
              <div className='planet-detail'>
                <h4 className='planet-name'>{planet.name}</h4>
              </div>
              <div className='space'>
                <div className='solarSys' id={`${planet.name}`}>
                  <div className={`${planet.name}Line1`}></div>
                  <div className={`${planet.name}Line2`}></div>
                  <div className={`${planet.name}Line3`}></div>
                  <div className={`${planet.name}Line4`}></div>
                  <div className={`${planet.name}Line5`}></div>
                  <div className={`${planet.name}Rings`}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>
          <span style={{ color: 'blue' }}>{selectedPlanet.name}</span> Details
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* add another key:value pair to db for jokes to render in the */}
            {selectedPlanet.overview}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          <Button onClick={seePlanet} autoFocus>
            See more
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
