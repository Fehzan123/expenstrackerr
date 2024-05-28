import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownUser, setDropdownuser] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleuser = () => {
    setDropdownuser(!dropdownUser);
  };

  return (
    <div className='navBar'>
      <div className='logo'>
        <img src="https://unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png" alt="Logo" />
      </div>
      <div className='icons'>
        <img src="https://unfluke.in/static/media/bell-icon.d99e8edc.png" className='icon' alt="Bell Icon" />
       {!dropdownOpen&& <FontAwesomeIcon icon={faCaretDown} className='caretIcon' onClick={toggleDropdown} />}
       {dropdownOpen&& <FontAwesomeIcon icon={faCaretUp} className='caretIcon' onClick={toggleDropdown} />}
        {dropdownOpen && (
          <div className='dropdownMenu'>
            <div className='dropdownItem'>Item 1</div>
            <div className='dropdownItem'>Item 2</div>
            <div className='dropdownItem'>Item 3</div>
          </div>
        )}
        <img src="https://unfluke.in/static/media/coin.9bfaef7e.jpeg" className='icon' alt="Coin Icon" />
        <img src="https://unfluke.in/static/media/monkey.5456259d.jpg" className='icon' alt="Monkey Icon" />
        {!dropdownUser&& <FontAwesomeIcon icon={faCaretDown} className='caretIcon' onClick={toggleuser} />}
       {dropdownUser&& <FontAwesomeIcon icon={faCaretUp} className='caretIcon' onClick={toggleuser} />}
        {dropdownUser && (
          <div className='dropdownMenu'>
            <div className='dropdownItem'>Item 1</div>
            <div className='dropdownItem'>Item 2</div>
            <div className='dropdownItem'>Item 3</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
