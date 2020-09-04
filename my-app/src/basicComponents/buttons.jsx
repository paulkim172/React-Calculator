import React, {Component} from 'react';
import NumberButtons from './numberButtons';
import ClearButtons from './clearButtons';
import OperationButtons from './operationButtons';

class Buttons extends Component {
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