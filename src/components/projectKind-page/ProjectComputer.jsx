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
      <div className="computer">
            <p className="title">{this.props.object.Name}</p> 
            {
              this.props.object.description.map(dis=>{
                return <div>      
                  <p>{dis.dis}</p>
                  {
                    dis.img!==null?
                    <img className={this.props.object.AppKind==="comuter"?"project-img-computer":"project-img-mobail"} src={require("./imgs/"+dis.img)} alt="project discraption"/>
                    :null
                  }
                </div>
              })
            }
            <button className="viewCode" onClick={()=>window.open(this.props.object.Link)}>view code</button>
      </div>
    );
  }
}

export default ProjectComputer;
