import React from 'react';

const blueBox = {
  border: '2px solid blue',
  width: '100px',
};

const divider = {
  'borderWidth': '0px 0px 2px 2px',
  'borderStyle': 'solid',
  'borderColor': 'blue',
};

const flexBox = {
  display: 'flex',
};

class Frams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={blueBox}>
        <div style={flexBox}>
          <div>top Left</div>
          <div style={divider}>top right</div>
        </div>
        <div>accumulativ score + current round score + maybe bonust points</div>
      </div>
    );
  }
}

export default Frams;
