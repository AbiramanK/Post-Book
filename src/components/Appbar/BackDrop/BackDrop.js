import React, { Component } from 'react';
import './BackDrop.css'
class BackDrop extends Component {
    render() { 
        return (
            <div className="back-drop"  onClick={this.props.click} />
        );
    }
}
 
export default BackDrop;