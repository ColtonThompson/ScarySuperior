import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import NumberFormat from 'react-number-format';

class Leaderboard extends Component {
  state = {
    data: [
      { id: 1, color: 'red', initials: 'R', score: 2000 },
      { id: 2, color: 'blue', initials: 'A', score: 250 },
      { id: 3, color: 'green', initials: 'RK', score: 25 },
      { id: 4, color: 'orange', initials: 'J', score: 200 },
      { id: 5, color: 'purple', initials: 'K', score: 1 },
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
                <th>Initial(s)</th>
                <th>Scary Score</th>
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
