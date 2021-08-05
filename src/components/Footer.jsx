import React, { Component } from 'react';

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <center>&copy; Colton Thompson {new Date().getFullYear()}</center>
      </React.Fragment>
    );
  }
}

export default Footer;
