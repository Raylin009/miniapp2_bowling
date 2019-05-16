import React from 'react';
import Key from './Key.jsx';

class Keypad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberKey:[1,2,3,4,5,6,7,8,9,'X',0,'OK'],
    };
  }

  render() {
    return (
      <div>
        {this.state.numberKey.map((ele)=><Key key= {ele} keyName={ele}/>)}
      </div>
    );
  }
}

export default Keypad;
