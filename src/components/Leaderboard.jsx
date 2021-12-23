import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import NumberFormat from 'react-number-format';

class Leaderboard extends Component {
  state = {
    data: [
      { id: 1, color: 'red', initials: 'Ruth', score: 19000 },
      { id: 2, color: 'Purple', initials: 'Val', score: 18500 },
      { id: 3, color: 'green', initials: 'Colton', score: 500 },
      { id: 4, color: 'magenta', initials: 'Scott', score: 3750 },
      { id: 5, color: 'yellow', initials: 'Braxton', score: 2000 },
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
