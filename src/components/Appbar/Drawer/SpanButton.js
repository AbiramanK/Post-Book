import React, { Component } from 'react';
import './SpanButton.css'
class SpanButton extends Component {
    render() { 
        return (
            <button className="toggle-button" onClick={this.props.click} >
                <div className="span-style" ></div>
                <div className="span-style" ></div>
                <div className="span-style" ></div>
            </button>
        );
    }
}
 
export default SpanButton;