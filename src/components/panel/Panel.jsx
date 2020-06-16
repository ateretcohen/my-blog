import React, { Component } from "react";
import { Link } from "react-router-dom";
import history from '../../history'
import './panel-style.scss'


class Panel extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }
 
  render() {
    return (
      <div className="panel">
          <hr/>
          <div className="inside-panel">
          <i id="panel-icon-left" class="fa fa-chevron-left" 
           onClick={ ()=>history.goBack() }></i>
           <img id="profil-pic" src={require("./pp.jpg")} alt="profil picture"/>
           <div id="profil-title">   
                <span id="user-name">Ateret Cohen</span><br/>
                <span>full-stack developer. </span>
           </div>
          <Link to="/menu">
          <i id="panel-icon-right" class="fa fa-bars"></i>
          </Link> 
          </div>
          
          <hr/>
      </div>
    );
  }
}

export default Panel;
