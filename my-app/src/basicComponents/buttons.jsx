import React, {Component} from 'react';
import NumberButtons from './numberButtons';
import ClearButtons from './clearButtons';
import OperationButtons from './operationButtons';

class Buttons extends Component {
    constructor(props){
        super(props);

    this.concatonateNumOne = this.concatonateNumOne.bind(this);
    this.concatonateNumTwo = this.concatonateNumTwo.bind(this);
    this.concatonateNumThree = this.concatonateNumThree.bind(this);
    this.concatonateNumFour = this.concatonateNumFour.bind(this);
    this.concatonateNumFive = this.concatonateNumFive.bind(this);
    this.concatonateNumSix = this.concatonateNumSix.bind(this);
    this.concatonateNumSeven = this.concatonateNumSeven.bind(this);
    this.concatonateNumEight = this.concatonateNumEight.bind(this);
    this.concatonateNumNine = this.concatonateNumNine.bind(this);

    this.concatonateNumZero = this.concatonateNumZero.bind(this);

    this.concatonatePeriod = this.concatonatePeriod.bind(this);

        this.state = {
            entry: this.props.currentEntry
        }
    }

    concatonateNumOne(){
        this.state.entry !== 0 &&
        this.setState({
            entry: this.state.number + "1"
        })
    }
    render() {
        return (
            <div>
                <NumberButtons/>
                <ClearButtons/>
                <OperationButtons/>
                
            </div>
        )
    }
}

export default Buttons;