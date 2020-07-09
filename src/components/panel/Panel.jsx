import React, { Component } from "react";
import { Link } from "react-router-dom";
import history from '../../history'
import './panel-style.scss'


class Panel extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
      profil:false
     }
 }
 
  render() {
    return (
      <div className="panel">
        {
          this.state.profil?
          <div id="big-img">
            <i id="close" class="fa fa-times" onClick={()=>this.setState({profil:false})}></i>
           <img id="profil-pic" src={require("./pp.jpg")} alt="profil picture"/>
          </div>
          :null
        }
          <hr/>
          <div className="inside-panel">
            {
              this.props.lan==="hebrow"?
              <i id="panel-icon-left" class="fa fa-chevron-right" 
              onClick={ ()=>history.goBack() }></i>
              :
              <i id="panel-icon-left" class="fa fa-chevron-left" 
              onClick={ ()=>history.goBack() }></i>
            }
         
           <img id="profil-pic" src={require("./pp.jpg")} alt="profil picture" onClick={()=>this.setState({profil:!this.state.profil})}/>
           {
             this.props.lan==="hebrow"?
            <div id="profil-title">   
                <span id="user-name">עטרת כהן</span><br/>
                <span>full-stack מפתחת</span>
           </div>
           :
           <div id="profil-title">   
                <span id="user-name">Ateret Cohen</span><br/>
                <span>full-stack developer. </span>
           </div>
           }
           
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
