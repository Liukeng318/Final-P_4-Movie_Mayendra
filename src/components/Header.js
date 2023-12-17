import React from 'react';
import '../App.css';
import Search from './Search';

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <h1>Lukeng Movie App</h1>
      <Search onSearch={onSearch} /> { }
    </header>
  );
};

export default Header;
