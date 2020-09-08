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
            entry: this.props.currentEntry
        }
    }

    concatonateNum(x){

        x = x.toString();
        let dummyVar;
        if(this.state.entry !== 0) {
            dummyVar = this.state.entry + x;
        } else {
            dummyVar = parseInt(x);
        }

        this.setState({
            entry: dummyVar
        })

        this.props.updateEntry(parseFloat(dummyVar));
        
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
        
        this.props.updateEntry(parseFloat(dummyVar));
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