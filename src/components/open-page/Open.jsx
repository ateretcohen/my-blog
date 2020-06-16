import React, { Component } from "react";
import './open-style.scss'


class Open extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
  render() {
    return (
      <div className="open">
        <i id="open-icon" class="fa fa-user-circle"></i>
      </div>
    );
  }
}

export default Open;
