import React, { Component } from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-body">
          <CardFront />
          <CardBack />
        </div>
      </div>
    );
  }
}
export default Card;
