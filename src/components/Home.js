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
            <div className="card">
              <div className='planet-detail'>
                <div></div>
                <h4 className='planet-name'>{planet.Name}</h4>
                
              </div>
              
              <div className="space">
                <div className='solarSys' id={`${planet.Name}`}>
                
                    {planet.Name === 'Saturn' ? (
                  <>
                  <div className="saturnLine1"></div>
                  <div className="saturnLine2"></div>
                  <div className="rings"></div>
                  </>
                ) : planet.Name === 'Earth' ? (
                  <>
                  <div className="earthLine1"></div>
                  <div className="earthLine2"></div>
                  <div className="earthLine3"></div>
                  <div className="earthLine4"></div>
                  <div className="earthLine5"></div>
                  </>
                ) : <div></div>}
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
