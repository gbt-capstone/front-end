import React from 'react';

import Map from '../components/Map';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <Map />
    </div>
  );
};

export default React.memo(Home);
