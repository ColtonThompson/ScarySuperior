import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Header extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <center>
          <img src='./img/logo-ph.png' />
        </center>
        <br />
        <Alert variant='success'>
          <b>DISCLAIMER:</b>{' '}
          <p>
            This website is intended to be a joke! Don't take any of this
            seriously.
          </p>
        </Alert>
        <center>
          This leaderboard was last updated on August 5th at 6:00 AM MST.
        </center>
      </React.Fragment>
    );
  }
}

export default Header;
