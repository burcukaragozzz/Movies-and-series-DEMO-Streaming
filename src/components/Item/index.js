import React from 'react';

import './style.scss';

const Item = props => {
  const { image, title } = props;

  return (
    <div className="item-list-container">
      <div className="item-image">
        <img src={image} alt="itemPoster" />      </div>
      <div className="item-title">
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Item;
