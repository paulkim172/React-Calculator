import React, {Component} from 'react';
import NumberButtons from './numberButtons';
import ClearButtons from './clearButtons';
import OperationButtons from './operationButtons';

class Buttons extends Component {
    constructor(props){
        super(props);

    this.concatonateNum = this.concatonateNum.bind(this);
    this.concatonatePeriod = this.concatonatePeriod.bind(this);

        this.state = {
            entry: this.props.currentEntry,
        }
    }

    concatonateNum(x){

        x = x.toString();

        if(this.state.entry !== 0){
            this.setState({
                entry: this.state.entry + x
            })
        } else {
            this.setState({
                entry: parseInt(x)
            })
        }

        this.props.updateEntry(this.state.entry);
        
    }

    concatonatePeriod(){
        for(let i = 0; i < this.state.entry.length; i++) {
            if(this.state.entry[i] === "."){
                return;
            }
        }
        this.setState({
            entry: this.state.entry + "."
        })
        
        this.props.updateEntry(this.state.entry);
        this.props.updateDisplay(this.state.entry);
    }

    
    render() {
        return (
            <div>
                <NumberButtons concatonateNum={this.concatonateNum} concatonatePeriod={this.concatonatePeriod}/>
                <ClearButtons/>
                <OperationButtons/>
                
            </div>
        )
    }
}

export default Buttons;