import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import NumberFormat from 'react-number-format';

class Leaderboard extends Component {
  state = {
    data: [
      { id: 1, color: 'red', initials: 'Ruth', score: 19000 },
      { id: 2, color: 'blue', initials: 'Alicia', score: 1800 },
      { id: 3, color: 'DarkBlue', initials: 'Randon', score: 18000 },
      { id: 4, color: 'LightBlue', initials: 'Jed', score: 5000 },
      { id: 5, color: 'Purple', initials: 'Val', score: 18500 },
      { id: 6, color: 'green', initials: 'Colton', score: 0 },
      { id: 7, color: 'magenta', initials: 'Scott', score: 0 },
      { id: 8, color: 'yellow', initials: 'Braxton', score: 2000 },
    ],
  };
  render() {
    this.state.data.sort((a, b) => b.score - a.score);
    return (
      <React.Fragment>
        <div>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Current Score</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((rowData, index) => (
                <tr>
                  <th scope='row'>{index + 1}</th>
                  <td>
                    <b>
                      <font color={rowData.color}>{rowData.initials}</font>
                    </b>
                  </td>
                  <td>{rowData.score.toLocaleString('en')}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}

export default Leaderboard;
