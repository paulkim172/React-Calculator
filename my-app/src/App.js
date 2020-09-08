import React, {Component} from 'react';
import Display from './basicComponents/display';
import Buttons from './basicComponents/buttons';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.updateEntry = this.updateEntry.bind(this);

    this.state = {
      currentDisplay: 0,
      currentEntry: 0,
      previousEntry: null
    }
  }

  updateEntry(x){
    this.setState({
      currentEntry: x
    })
  }

  render() {
    return (
      <div className="App">
        <Display display={this.state.currentEntry}/>
        <Buttons currentEntry={this.state.currentEntry} updateEntry={this.updateEntry}/>
      </div>
    );
  }
  
}

export default App;
