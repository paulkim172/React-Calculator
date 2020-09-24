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

            let addition = this.state.resultEntry + x;
            let additionDisplay = addition.toString();

            this.setState({
              currentEntry: x,
              resultEntry: addition,
              currentDisplay: additionDisplay,
            });
            break;
  
          case 'subtract':
            x = parseFloat(x);

            let subtraction = this.state.resultEntry - x;
            let subtractionDisplay = subtraction.toString();

            this.setState({
              currentEntry: x,
              resultEntry: subtraction,
              currentDisplay: subtractionDisplay,
            });
            break;
  
          case 'multiply':
            x = parseFloat(x);

            let multiplication = this.state.resultEntry * x;
            let multiplicationDisplay = multiplication.toString();

            this.setState({
              currentEntry: x,
              resultEntry: multiplication,
              currentDisplay: multiplicationDisplay,
            });
            break;
  
          case 'divide':
            x = parseFloat(x);

            let division = this.state.resultEntry / x;
            let divisionDisplay = division.toString();

            this.setState({
              currentEntry: x,
              resultEntry: division,
              currentDisplay: divisionDisplay,
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
            }
             else {
              this.setState({
                currentEntry: ''
              })
            }
            break;
  
          default:
            break;
            
        }
  
      } else if(x !== '' && this.state.resultEntry == null) {
          x = parseFloat(x);
          this.setState({
            resultEntry: x,
          })
      } else {
          
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
