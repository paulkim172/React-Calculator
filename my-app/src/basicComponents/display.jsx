import React, {Component} from 'react';

class Display extends Component {

    componentDidMount(){
        this.determineFontSize();
    }

    componentDidUpdate(){
        this.determineFontSize();
    }

    determineFontSize(){
        let displayStyle = {
            fontSize: '5rem'
        }
        
        if(this.props.display.length > 20) {
            displayStyle = {
                fontSize: '3rem'
            }
        }
        else if (this.props.display.length > 17) {
            displayStyle = {
                fontSize: '3.5rem'
            }
        } 
        else if(this.props.display.length > 13){
            displayStyle = {
                fontSize: '4rem'
            }
        } 
        else {
            displayStyle = {
                fontSize: '5rem'
            }
        }

        return displayStyle;
    }

    render() {
        
        return (
                <div className="display" style={this.determineFontSize()}>
                    {this.props.display}
                </div>
            
        )
    }
}

export default Display;