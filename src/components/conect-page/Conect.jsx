import React, { Component } from "react";
import './conect-style.scss'


class Conect extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
     }
 }
 
  render() {
    return (
      <div className="conect">
          <hr/>
          
          <i id="icon" style={{backgroundColor:"var(--green)"}} class="fa fa-whatsapp"></i>
          <i id="icon" style={{backgroundColor:"var(--red)"}} class="fa fa-at"></i>
          <i id="icon" style={{backgroundColor:"var(--blue)"}} class="fa fa-linkedin"></i>
          <i id="icon" style={{backgroundColor:"var(--pink)"}} class="fa fa-github"></i>
          
      </div>
    );
  }
}

export default Conect;
