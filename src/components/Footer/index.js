import React from 'react';
import Facebook from '../../images/facebook.svg';
import Instagram from '../../images/instagram.svg';
import Twitter from '../../images/twitter.svg';
import AppStore from '../../images/app.svg';
import GooglePlay from '../../images/google.svg';
import Microsoft from '../../images/microsoft.svg';


import './style.scss';

const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer-container">
      <div className="footer-menu-container">
        <ul className="footer-menu-list">
          <li className="footer-menu-item">
            <a href="#">Home</a>
          </li>
          <li className="footer-menu-item">
            <a href="#">Terms and Conditions</a>
          </li>
          <li className="footer-menu-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="footer-menu-item">
            <a href="#">Collection Statement</a>
          </li>
          <li className="footer-menu-item">
            <a href="#">Help</a>
          </li>
          <li className="footer-menu-item">
            <a href="#">Manage Account</a>
          </li>
        </ul>
        <span className="footer-text">Copyright © 2016 DEMO Streaming. All Rights Reserved.</span>
      </div>
      <div className="footer-icons-container">
        <ul className="social-media-icons">
          <li className="icon">
            <a href="#">
              <img src={Facebook} alt="facebook" />
            </a>
          </li>
          <li className="icon">
            <a href="#">
              <img src={Instagram} alt="intagram" />
            </a>
          </li>
          <li className="icon">
            <a href="#">
              <img src={Twitter} alt="twitter" />
            </a>
          </li>
        </ul>
        <ul className="store-icons">
          <li className="icon">
            <a href="#">
              <img src={AppStore} alt="appStore" />
            </a>
          </li>
          <li className="icon">
            <a href="#">
              <img src={GooglePlay} alt="googlePlay" />
            </a>
          </li>
          <li className="icon">
            <a href="#">
              <img src={Microsoft} alt="getItFromMicrosoft" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)



export default Footer;
