import React, {Component} from 'react';

class NumberButtons extends Component {
    render(){
        return(
            <div className="left-buttons">
                <button className="one" onClick={() => this.props.concatonateNum(1)}>1</button>
                <button className="two" onClick={() => this.props.concatonateNum(2)}>2</button>
                <button className="three" onClick={() => this.props.concatonateNum(3)}>3</button>
                <button className="four" onClick={() => this.props.concatonateNum(4)}>4</button>
                <button className="five" onClick={() => this.props.concatonateNum(5)}>5</button>
                <button className="six" onClick={() => this.props.concatonateNum(6)}>6</button>
                <button className="seven" onClick={() => this.props.concatonateNum(7)}>7</button>
                <button className="eight" onClick={() => this.props.concatonateNum(8)}>8</button>
                <button className="nine" onClick={() => this.props.concatonateNum(9)}>9</button>
                <button className="zero" onClick={() => this.props.concatonateNum(0)}>0</button>
                <button className="period" onClick={() => this.props.concatonatePeriod()}>.</button>
            </div>
        )
    }
}

export default NumberButtons;