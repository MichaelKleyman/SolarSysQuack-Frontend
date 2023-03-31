import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Planet from './components/Planet';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/planet/:name' element={<Planet />} />
    </Routes>
  );
};
export default MyRoutes;
