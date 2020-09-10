import React, {Component} from 'react';
import NumberButtons from './numberButtons';
import ClearButtons from './clearButtons';
import OperationButtons from './operationButtons';

class Buttons extends Component {
    constructor(props){
        super(props);

    this.concatonateNum = this.concatonateNum.bind(this);
    this.concatonatePeriod = this.concatonatePeriod.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.clearEntry = this.clearEntry.bind(this);

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.equals = this.equals.bind(this);

    this.state = {
        entry: this.props.currentEntry
    };
}

    concatonateNum(x){

        x = x.toString();
        let dummyVar;
        if(this.state.entry !== null && this.state.entry !== 0) {
            dummyVar = this.state.entry + x;
        } else {
            dummyVar = x;
        }

        this.setState({
            entry: dummyVar
        })

        this.props.updateEntry(dummyVar);
    }

    concatonatePeriod(){
        for(let i = 0; i < this.state.entry.length; i++) {
            if(this.state.entry[i] === "."){
                return;
            }
        }
        let dummyVar = this.state.entry + "."
        this.setState({
            entry: dummyVar
        })
        
        this.props.updateEntry(dummyVar);
    }

    clearAll(){
        this.setState({
            entry: ''
        })

        this.props.clearAll();
    }

    clearEntry(){
        this.setState({
            entry: ''
        })

        this.props.clearEntry();
    }
    
    add(){
        
        this.props.solve(this.state.entry);
        this.props.setOperation('add');

        this.setState({
            entry: ''
        })

        
    }

    subtract(){
        this.props.solve(this.state.entry);
        this.props.setOperation('subtract');
        
        this.setState({
            entry: ''
        })
    }

    multiply(){

        this.props.solve(this.state.entry);
        this.props.setOperation('multiply');
        
        this.setState({
            entry: ''
        })
    }

    divide(){

        this.props.solve(this.state.entry);
        this.props.setOperation('divide');
        
        this.setState({
            entry: ''
        })
    }

    equals(){
        this.props.solve(this.state.entry);
        this.props.setOperation('equals');
        
        this.setState({
            entry: ''
        })
    }

    render() {
        return (
            <div>
                <NumberButtons 
                    concatonateNum={this.concatonateNum} 
                    concatonatePeriod={this.concatonatePeriod}
                />
                <ClearButtons 
                    clearAll={this.clearAll}
                    clearEntry={this.clearEntry}
                />
                <OperationButtons 
                    add={this.add} 
                    subtract={this.subtract} 
                    multiply={this.multiply} 
                    divide={this.divide} 
                    equals={this.equals}
                />
            </div>
        )
    }
}

export default Buttons;