import React, { Component } from "react";
import './projects-style.scss'
import AllProjects from "./AllProjects.jsx";
import Data from './projects-data.json'

class Projects extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          projectsList:[]
     }
 }

 componentDidMount() {
    let projectsList=[];
    Data.map(project=>{
        projectsList.push({
        AppKind:project.AppKind,
        Id: project.Id,
        Img:String(project.Img) ,
        Link: project.Link,
        Name: project.Name
        })
   })
   this.setState({projectsList:projectsList})
   
 }
 
  render() {
    return (
      <div className="projects">
         {
             this.state.projectsList.map(project=>{
                 return <AllProjects Id={project.Id} Name={project.Name} Img={project.Img} Link={project.Link} AppKind={project.AppKind}/>
                 
             })
         }
         
      </div>
    );
  }
}

export default Projects;
