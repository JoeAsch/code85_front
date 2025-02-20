import React from 'react';
import './nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Enter Inventory Adjustmens Here
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="/EntryForm">Entry Form</a></li>
          <li><a href="/report">Report</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/cart" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </a>
        <a href="/account" className="user-icon">
          <i className="fas fa-user"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;