import React, { Component } from "react";
import './projectKind-style.scss'


class ProjectComputer extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }
 
  render() {
    return (
      <div className="projectKind">
            <p>{this.props.Id}</p> 
      </div>
    );
  }
}

export default ProjectComputer;
