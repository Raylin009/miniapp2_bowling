import React from 'react';
import Frams from './Frams.jsx';

class ScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toalFrams:10,
      fram:'',
      round:'',
      curScore:'',
      next1stround:'',
      next2edround:'',
    };
  }

  render() {
    return (
      <div>
        Score Card Component present
        <div>
          <Frams />
        </div>
      </div>
    );
  }
}

export default ScoreCard;
