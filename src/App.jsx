import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="header">
          <h2>Bowling App</h2>
          <h4> brought to you by Ray Lin</h4>
        </div>
        <div>
          <h5>Score Card</h5>
          <h6>Frams</h6>
          <h6>LastFram</h6>
        </div>
        <div className="scoreInput">
          <h5>KeyPad</h5>
          <h6>Keys</h6>
        </div>
      </div>
    );
  }
}

export default App;
