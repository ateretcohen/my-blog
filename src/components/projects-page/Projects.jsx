import React, { Component } from "react";
import './projects-style.scss'
import AllProjects from "./AllProjects.jsx";

class Projects extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          projectsList:this.props.projectsList,
          allProjects:true,
          openProject:{Id:0,AppKind:""}
     }
 }

 openProject=(Id,AppKind)=>{
     this.props.openProject(Id)
     AppKind==="mobail"?
     this.props.history.push("/pMobil")
     :
     this.props.history.push("/pComputer")

 }
 
  render() {
    return (
      <div className="projects">
         {
             this.state.projectsList.map(project=>{
                 return <AllProjects openProject={this.openProject} Id={project.Id} Name={project.Name} Img={project.Img} AppKind={project.AppKind}/>
             })
         }        
      </div>
    );
  }
}

export default Projects;
