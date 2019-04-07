import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.data.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.data.img} alt="dog's image"/> 
        </div>
        <span>By {props.data.author/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
	headline: PropTypes.string,
	img: PropTypes.string,
	author: PropTypes.string,
};

export default Card;
