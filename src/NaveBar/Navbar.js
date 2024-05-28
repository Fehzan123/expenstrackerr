import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Nav.css'



const Navbar = () => {
  return (
    <div className='navbar'>
      
      <div>LeaderBoard</div>
      <div>Historical Trading<FontAwesomeIcon icon={faCaretDown}/></div>
      <div>Historical Chart</div>
      <div>Scanner</div>
      <div>Alert</div>
      <div>Basic Backtest</div>
      <div>Advance Backtest</div>
      <div>Pricing</div>
      <div>MyEarnings</div>
    </div>
  );
};

export default Navbar;
