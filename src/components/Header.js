import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import {
  faCheckSquare,
  faCoffee,
  faSearch,
} from '@fortawesome/fontawesome-free-solid';

import React from 'react';

import '../styles/components/Header.scss';

fontawesome.library.add(faCheckSquare, faCoffee, faSearch);

const Header = () => {
  return (
    <div id='header-wrapper'>
      <div className='bars-wrapper'>
        <FontAwesomeIcon icon='fa-solid fa-bars' id='header-icon' />
      </div>
      <h2 className='title'>화슐랭</h2>
      <div className='search-wrapper'>
        <FontAwesomeIcon icon='search' id='header-icon' />
      </div>
    </div>
  );
};

export default React.memo(Header);
