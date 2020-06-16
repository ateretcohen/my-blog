import React, { Component } from "react";
import './home-style.scss'

class Home extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }
 
  render() {
    return (
      <div className="home">
      <p className="im">Wellcome to my blog! Thanks for joining.</p>
      <p className="im">I want to show you some of my personal projects</p>

      <div className="projects">
        <p>create notes</p>
        <img className="project-img" src={require("./notes.png")} alt="notes project"/>
      </div>
      <div className="projects">
        <p>sudoku game</p>
         <img className="project-img" src={require("./sudoku.jpg")} alt="sudoku project"/>
      </div>
      <div className="projects">
        <p>cafe cafe database</p>
         <img className="project-img" src={require("./cafe cafe.png")} alt="cafe cafe project"/>
      </div>
      </div>
    );
  }
}

export default Home;
