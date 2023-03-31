import React, { useState } from 'react';
import { GiRingedPlanet } from 'react-icons/gi';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState('');
  const theme = useTheme();
  //   const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = (name) => {
    setOpen(true);
    setSelectedPlanet(name);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPlanet('');
  };

  const planets = [
    { Name: 'Mercury' },
    { Name: 'Venus' },
    { Name: 'Earth' },
    { Name: 'Mars' },
    { Name: 'Jupiter' },
    { Name: 'Saturn' },
    { Name: 'Uranus' },
    { Name: 'Neptune' },
    { Name: 'Pluto' },
  ];

  return (
    <div className='main-page'>
      <div className='header'>
        <h1>Our Solar System</h1>
      </div>
      <div className='planets'>
        {planets.map((planet, i) => (
          <div
            key={i}
            className='planet-border'
            onClick={() => handleClickOpen(planet.Name)}
          >
            <div className='planet-detail'>
              <div></div>
              <h4 className='planet-name'>{planet.Name}</h4>
              <div className='planet-icon'>
                <GiRingedPlanet
                  size={25}
                  style={{
                    color: 'blue',
                  }}
                />
              </div>
            </div>

            {planet.Name === 'Saturn' ? (
              <div>Saturn</div>
            ) : planet.Name === 'Uranus' ? (
              <div>Uranus</div>
            ) : (
              <div className='space'>
                <div id={`${planet.Name}`}>
                  <span className='shadow'></span>
                </div>
              </div>
            )}

            {/* <div className="space">
              <div id={`${planet.Name}`}><span className="shadow"></span></div>
            </div> */}
          </div>
        ))}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>
          {selectedPlanet} Details
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose} autoFocus>
            See more
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
