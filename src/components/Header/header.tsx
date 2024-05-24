import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (

    <div className="header">
      <div className="left">
        Dashboard
      </div>

      <div className="right">
        <span>Juliao balde</span>
        <span>juliaobalde@123.com</span>
        <img src="../../src/assets/user_icon.png" alt="aside_icon1.png"/> 
      </div>
    </div>
  );
};

export default Header;
