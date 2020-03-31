import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const Header = () => (
  <div className="header-wrapper">
    <Link to="/" className="header-text">DEMO Streaming</Link>
    <div className="header-links">
      <a href="#" className="login-button">Log in</a>
      <button className="free-trial-button">Start your free trial</button>
    </div>
  </div>
)

export default Header;