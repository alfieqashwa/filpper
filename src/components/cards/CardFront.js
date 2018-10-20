import React, { Component } from 'react';
import './Card.css';

const radiohead = require('../../img/radiohead.jpg');

class CardFront extends Component {
  render() {
    return (
      <div className="card-side side-front">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">
              <img src={radiohead} />
              {/* <img src="https://source.unsplash.com/w8YICpz1I10/358x458" /> */}
            </div>
            <div className="col-xs-6 side-front-content">
              <h2>Czech based</h2>

              <h1>UI/UX Designer</h1>

              <p>
                Alfie Qashwa is driven by turning ideas into scalable and and
                empowering experiences that solve real life problems.
              </p>

              <p>
                He is currently the founder of Dvorak Media. Previously, Alfie
                Qashwa was a product designer at Tesla.
                <br />
                No, I'm just kidding :)
              </p>

              <p>This is just for testing purpose only.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CardFront;
