import React, {Component} from 'react';

class OperationButtons extends Component {
    render(){
        return(
            <div>
                <button onClick={() => {this.props.add()}}>+</button>
                <button onClick={() => {this.props.subtract()}}>-</button>
                <button onClick={() => {this.props.multiply()}}>×</button>
                <button onClick={() => {this.props.divide()}}>÷</button>
                <button onClick={() => {this.props.equals()}}>=</button>
            </div>
        )
    }
}

export default OperationButtons;