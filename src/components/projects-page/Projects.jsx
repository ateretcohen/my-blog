import React, { Component } from "react";
import './projects-style.scss'
import AllProjects from "./AllProjects.jsx";

class Projects extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          projectsList:this.props.projectsList,
          allProjects:true,
          openProject:{Id:0}
     }
 }

 openProject=(Id)=>{
     this.props.openProject(Id)
     this.props.history.push("/pComputer")
 }
 
  render() {
    return (
      <div className="projects">
         {
             this.state.projectsList.map(project=>{
                 return <AllProjects openProject={this.openProject} Id={project.Id} Name={project.Name} Img={project.Img} Tec={project.Tec}/>
             })
         }  
         <button className="viewCode" onClick={()=>window.open("https://github.com/ateretcohen/")}>view all</button>      
      </div>
    );
  }
}

export default Projects;
