import React, { useState, useContext } from 'react';

import Map from '../components/Map';
import Header from '../components/Header';
import Info from '../components/Info';
import Intro from '../components/Intro';

import { ModalStateContext } from '../App';

const Home = () => {
  const openModal = useContext(ModalStateContext);

  return (
    <div>
      <Intro />
      <Header />
      <Map />
      {openModal && <Info />}
    </div>
  );
};

export default React.memo(Home);
