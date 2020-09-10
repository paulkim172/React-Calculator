import React, {Component} from 'react';
import Display from './basicComponents/display';
import Buttons from './basicComponents/buttons';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.updateEntry = this.updateEntry.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.clearEntry = this.clearEntry.bind(this);
    this.clearCurrentEntry = this.clearCurrentEntry.bind(this);

    this.setOperation = this.setOperation.bind(this);
    this.solve = this.solve.bind(this);

    this.state = {
      currentDisplay: 0,
      currentEntry: '',
      resultEntry: null,
      operation: null
    }
  }

  updateEntry(x){
    this.setState({
      currentDisplay: x
    })
  }

  clearAll(){
    this.setState({
      currentDisplay: 0,
      currentEntry: '',
      resultEntry: null,
      operation: null
    })
  }

  clearCurrentEntry(){
    this.setState({
      currentEntry: '',
    })
  }

  clearEntry(){
    this.setState({
      currentDisplay: 0,
      currentEntry: ''
    })
  }
  
  setOperation(x){
    this.setState({
      operation: x
    })
  }

  solve(x){

    if(this.state.resultEntry !== null){

      switch(this.state.operation){
        case 'add':
          x = parseFloat(x);
          this.setState({
            currentEntry: x,
            resultEntry: this.state.resultEntry + x,
            currentDisplay: this.state.resultEntry + x,
          });
          break;

        case 'subtract':
          x = parseFloat(x);
          this.setState({
            currentEntry: x,
            resultEntry: this.state.resultEntry - x,
            currentDisplay: this.state.resultEntry - x,
          });
          break;

        case 'multiply':
          x = parseFloat(x);
          this.setState({
            currentEntry: x,
            resultEntry: this.state.resultEntry * x,
            currentDisplay: this.state.resultEntry * x,
          });
          break;

        case 'divide':
          x = parseFloat(x);
          this.setState({
            currentEntry: x,
            resultEntry: this.state.resultEntry / x,
            currentDisplay: this.state.resultEntry / x,
          });
          break;

        case 'equals':
          console.log(this.state.resultEntry);
          if(x !== ''){
            x = parseFloat(x);
            this.setState({
              currentEntry: '',
              resultEntry: x
            })
          } else {
            this.setState({
              currentEntry: ''
            })
          }
          break;

        default:
          break;
          
      }

    } else {
        this.setState({
          resultEntry: x,
        })
    }
  }

  render() {
    return (
      <div className="App">
        <Display display={this.state.currentDisplay}/>
        <Buttons 
          currentEntry={this.state.currentEntry} 
          resultEntry={this.state.resultEntry}

          updateEntry={this.updateEntry} 

          clearAll = {this.clearAll} 
          clearEntry = {this.clearEntry} 
          
          solve={this.solve}
          setOperation={this.setOperation}
          clearCurrentEntry={this.clearCurrentEntry}
        />
      </div>
    );
  }
  
}

export default App;
