import React, {Component} from 'react';

class NumberButtons extends Component {
    render(){
        return(
            <div>
                <button onClick={() => this.props.concatonateNum(1)}>1</button>
                <button onClick={() => this.props.concatonateNum(2)}>2</button>
                <button onClick={() => this.props.concatonateNum(3)}>3</button>
                <button onClick={() => this.props.concatonateNum(4)}>4</button>
                <button onClick={() => this.props.concatonateNum(5)}>5</button>
                <button onClick={() => this.props.concatonateNum(6)}>6</button>
                <button onClick={() => this.props.concatonateNum(7)}>7</button>
                <button onClick={() => this.props.concatonateNum(8)}>8</button>
                <button onClick={() => this.props.concatonateNum(9)}>9</button>
                <button onClick={() => this.props.concatonateNum(0)}>0</button>
                <button onClick={() => this.props.concatonatePeriod()}>.</button>
            </div>
        )
    }
}

export default NumberButtons;