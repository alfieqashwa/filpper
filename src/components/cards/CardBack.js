import React, { Component } from 'react';
import './Card.css';

// React Component for form inputs
class CardInput extends Component {
  render() {
    return (
      <fieldset>
        <input
          name={this.props.name}
          id={this.props.id}
          type={this.props.type || 'text'}
          placeholder={this.props.placeholder}
        />
      </fieldset>
    );
  }
}

// React component for textarea
class CardTextArea extends Component {
  render() {
    return (
      <fieldset>
        <textarea
          name={this.props.name}
          id={this.props.id}
          placeholder={this.props.placeholder}
          required
        />
      </fieldset>
    );
  }
}

// React component for form button
class CardButton extends Component {
  render() {
    return (
      <fieldset>
        <button
          className={this.props.className}
          type={this.props.type}
          value={this.props.value}
        >
          {this.props.value}
        </button>
      </fieldset>
    );
  }
}

// React component for social profile links
class CardProfileLinks extends React.Component {
  render() {
    const profileLinks = [
      'twitter',
      'linkedin',
      'dribble',
      'facebook',
      'youtube'
    ];

    const linksList = profileLinks.map((link, index) => (
      <li key={index}>
        <a href="https://www.alfieqashwa.me">
          <i className={'fa fa-' + link} />
        </a>
      </li>
    ));
    return (
      <div className="card-social-links">
        <ul className="social-links">{linksList}</ul>
      </div>
    );
  }
}

class CardBack extends Component {
  render() {
    return (
      <div className="card-side side-back">
        <div className="container-fluid">
          <h1>Let's get in touch</h1>

          <form formAction="" className="card-form">
            <div className="row">
              <div className="col-xs-6">
                <CardInput
                  name="contactFirstName"
                  id="contactFirstName"
                  type="text"
                  placeholder="Your first name"
                />
              </div>

              <div className="col-xs-6">
                <CardInput
                  name="contactLastName"
                  id="contactLastName"
                  type="text"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6">
                <CardInput
                  name="contactEmail"
                  id="contactEmail"
                  type="email"
                  placeholder="Your email address"
                />
              </div>

              <div className="col-xs-6">
                <CardInput
                  name="contactSubject"
                  id="contactSubject"
                  type="email"
                  placeholder="Subject"
                />
              </div>
            </div>

            <CardTextArea
              name="contactMessage"
              id="contactMessage"
              placeholder="Send message"
            />

            <CardButton
              name="btn btn-primary"
              type="submit"
              value="Send message"
            />
          </form>

          <CardProfileLinks />
        </div>
      </div>
    );
  }
}
export default CardBack;
