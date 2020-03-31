import React from 'react';
import { Link } from 'react-router-dom';

import MovieImage from '../../images/movieSymbol.png'

import './style.scss';

const TypeElement = props => {

  const { label, title, url } = props;

  return (
    <div className="program-type-wrapper">
      <Link className="program-type-container" to={url}>
        <div className="image-container">
          <img src={MovieImage} alt=""/>
        </div>
        <div className="program-type">
          <span>{label}</span>
        </div>
        <div className="program-type-title">
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
}

export default TypeElement;
