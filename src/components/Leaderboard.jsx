import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class Leaderboard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>#</th>
                <th>Initial(s)</th>
                <th>Scary Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>RK</td>
                <td>20,000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>A</td>
                <td>11,000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>R</td>
                <td>10,000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>K</td>
                <td>5,000</td>
              </tr>
              <tr>
                <td>5</td>
                <td>T</td>
                <td>4,500</td>
              </tr>
              <tr>
                <td>6</td>
                <td>J</td>
                <td>4,250</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}

export default Leaderboard;
