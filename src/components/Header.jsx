import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Header extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Alert variant='warning'>
          <b>DISCLAIMER:</b>{' '}
          <p>
            Don't take this too seriously! This is a joke and this is just a fun
            way to mess around a bit more!
          </p>
        </Alert>
        <center>
          This leaderboard was last updated on August 5th at 5:08 AM MST.
        </center>
      </React.Fragment>
    );
  }
}

export default Header;
