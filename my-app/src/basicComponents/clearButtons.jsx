import React, {Component} from 'react';

class ClearButtons extends Component {
    render(){
        return(
            <div>
                <button onClick={() => {this.props.clearAll()}}>C</button>
                <button onClick={() => {this.props.clearEntry()}}>CE</button>
            </div>
        )
    }
}

export default ClearButtons;