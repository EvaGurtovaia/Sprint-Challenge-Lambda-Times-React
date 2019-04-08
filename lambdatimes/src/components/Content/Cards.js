import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((data) => 
      <Card data={data} />)
}
    </div>
  )
}

Cards.propTypes = {
cards: PropTypes.arrayOf(
PropTypes.shape({
headline: PropTypes.string,
tab: PropTypes.string,
author: PropTypes.string
    })
  )
};

export default Cards;