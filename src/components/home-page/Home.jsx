import React, { Component } from "react";
import './home-style.scss'
import { Link } from "react-router-dom";

class Home extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }
 openProject=(Id)=>{
  this.props.openProject(Id)
  this.props.history.push("/pComputer")
}
  render() {
    return (
      <div className="home">
      <p className="im">Wellcome to my blog! Thanks for joining.</p>
      <p className="im">I want to show you some of my personal projects</p>

      <div className="projects" onClick={()=>this.openProject(this.props.projectsList[0].Id)}>
     <p>{this.props.projectsList[0].Name}</p>
        <img className="project-img" src={require("./"+this.props.projectsList[0].Img)} alt="notes project"/>
      </div>
      <div className="projects" onClick={()=>this.openProject(this.props.projectsList[1].Id)}>
        <p>{this.props.projectsList[1].Name}</p>
         <img className="project-img" src={require("./"+this.props.projectsList[1].Img)} alt="sudoku project"/>
      </div>
      <div className="projects" onClick={()=>this.openProject(this.props.projectsList[2].Id)}>
        <p>{this.props.projectsList[2].Name}</p>
         <img className="project-img" src={require("./"+this.props.projectsList[2].Img)} alt="cafe cafe project"/>
      </div>
      <button className="viewCode" onClick={()=>this.props.history.push("/projects")}>view more</button>
      </div>
    );
  }
}

export default Home;
