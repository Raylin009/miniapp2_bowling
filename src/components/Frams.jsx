import React from 'react';

const blueBox = {
  border: '2px solid blue',
  width: '100px',
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
          <div style={blueBox}>top right</div>
        </div>
        <div>bottom result</div>
      </div>
    );
  }
}

export default Frams;
