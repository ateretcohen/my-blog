import React, { Component } from "react";
import './projects-style.scss'


class AllProjects extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          veiwP:false
     }
 }
 
  render() {
    return (
      <div className="projects" onClick={()=>this.setState({veiwP:!this.state.veiwP})}>
            {
              this.state.veiwP?
              <div className="project">
                <button style={{marginTop:"35%"}} className="viewCode-p" onClick={()=>window.open(this.props.Link)}>{this.props.lan==="hebrow"?"צפיה בקוד":"view code"}</button>      
                 <button className="viewCode-p" onClick={()=>this.props.openProject(this.props.Id)}>{this.props.lan==="hebrow"?"הסבר":"explain"}</button>         
              </div>
              :
              <div className="project">
                <p className="title">{this.props.Name}</p>
                <p>{this.props.Tec}</p>
                <img className="project-img" src={require("./imgs/"+this.props.Img)} alt="notes project"/>
              </div>
            }
            
      </div>
    );
  }
}

export default AllProjects;
