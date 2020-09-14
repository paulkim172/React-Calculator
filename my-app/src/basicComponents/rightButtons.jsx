import React, {Component} from 'react';

class rightButtons extends Component {
    render(){
        return(
            <div className="right-buttons">
                <div className="clear-buttons">
                    <button onClick={() => {this.props.clearAll()}}>C</button>
                    <button onClick={() => {this.props.clearEntry()}}>CE</button>
                </div>
                <div className="operation-buttons">
                    <button className="plus" onClick={() => {this.props.add()}}>+</button>
                    <button className="minus" onClick={() => {this.props.subtract()}}>-</button>
                    <button className="times" onClick={() => {this.props.multiply()}}>×</button>
                    <button className="divide" onClick={() => {this.props.divide()}}>÷</button>
                    <button className="equals" onClick={() => {this.props.equals()}}>=</button>
                </div>
                
            </div>
        )
    }
}

export default rightButtons;