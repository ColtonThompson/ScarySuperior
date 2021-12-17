import React, { Component } from 'react';

class PointsBreakdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h1>Points Breakdown</h1>
        <ul style={{ listStyleType: 'none', fontSize: '18px' }}>
          <li>
            <b>Yelling</b> - 5,000 Points
          </li>
          <li>
            <b>Evil Glare</b> - 2,500 Points
          </li>
          <li>
            <b>Brooding Silence</b> - 1,000 Points
          </li>
          <li>
            <b>Snarky Comment</b> - 500 Points
          </li>
          <li>
            <b>Voluntelling</b> - 250 Points
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default PointsBreakdown;
