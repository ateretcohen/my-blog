import React, { Component } from "react";
import './projectKind-style.scss'


class ProjectMobail extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }
 
  render() {
    return (
      <div className="projectKind">
          <p>{this.props.object.Name}</p>
          <p></p>
      </div>
    );
  }
}

export default ProjectMobail;
