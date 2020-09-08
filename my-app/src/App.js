import React, {Component} from 'react';
import Display from './basicComponents/display';
import Buttons from './basicComponents/buttons';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.updateEntry = this.updateEntry.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);

    this.state = {
      currentDisplay: 0,
      currentValue: 0,
      currentEntry: 0,
      previousEntry: null
    }
  }

  updateEntry(x){
    this.setState({
      currentDisplay: x
    })
  }

  updateValue(x){
    this.setState({
      currentValue: x
    })
  }

  updateDisplay(x){
    this.setState({
      currentDisplay: x
    })
  }

  render() {
    return (
      <div className="App">
        <Display display={this.state.currentDisplay}/>
        <Buttons updateEntry={this.updateEntry} updateDisplay={this.updateDisplay}/>
      </div>
    );
  }
  
}

export default App;
