import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Header extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <center>
          <img src='./img/logo-v1.jpg' />
          <br />
          <small>
            Art created by <b>Ginny Decker</b>
          </small>
        </center>
        <br />
        <Alert variant='success'>
          <b>DISCLAIMER:</b> <p>This website is a joke! Enjoy!</p>
        </Alert>
      </React.Fragment>
    );
  }
}

export default Header;
