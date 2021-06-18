import React, { Component } from 'react';

import Heading from './Heading';

import './App.css';

class App extends Component {


  constructor() {
    super();

    this.state = {
      classValue: 'red'
    }
  }


  changeColor = (color) => {
    this.setState({classValue: color})
  }

  render() {
    return (
      <div className="App">
        
        <Heading textColor={this.state.classValue} />
        
        <button onClick={()=>this.changeColor('red')}>red</button>
        <button onClick={()=>this.changeColor('green')}>green</button>
        <button onClick={()=>this.changeColor('blue')}>blue</button>
      </div>
    );
  }

}

export default App;
