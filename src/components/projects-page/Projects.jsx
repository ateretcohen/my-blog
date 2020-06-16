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

 showProject=(Id,AppKind)=>{
     const pro={Id:Id,AppKind:AppKind}
     this.setState({openProject:pro})
    //  this.setState({allProjects:false})
     console.log(this.state.openProject);
     
 }
 
  render() {
    return (
      <div className="projects">
        
         {
             this.state.allProjects?
             this.state.projectsList.map(project=>{
                 return <AllProjects showProject={this.showProject} Id={project.Id} Name={project.Name} Img={project.Img} Link={project.Link} AppKind={project.AppKind}/>
             })
             :null
         }
         
      </div>
    );
  }
}

export default Projects;
