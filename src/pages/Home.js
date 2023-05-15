import React from 'react';

import Map from '../components/Map';

const Home = () => {
  return (
    <h2>
      <Map />
    </h2>
  );
};

export default React.memo(Home);
