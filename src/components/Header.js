import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';

import '../styles/components/Header.scss';

fontawesome.library.add(faCheckSquare, faCoffee);

const Header = () => {
  return (
    <div id='header-wrapper'>
      <div>
        <FontAwesomeIcon icon='fa-solid fa-bars' id='bars-icon' />
      </div>
    </div>
  );
};

export default Header;
