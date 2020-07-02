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
          
         <div> <i id="icon" style={{color:"var(--green)"}} class="fa fa-whatsapp"></i><span>+972 545420225</span></div>
         <div> <i id="icon" style={{color:"var(--red)"}} class="fa fa-at"></i><span>ateret1998@gmail.com</span></div>
         <div> <i id="icon" style={{color:"var(--blue)"}} class="fa fa-linkedin"></i><span onClick={()=>window.open("https://www.linkedin.com/in/ateret-hodaya-cohen/")}>https://www.linkedin.com/in/ateret-hodaya-cohen/</span></div>
         <div> <i id="icon" style={{color:"var(--pink)"}} class="fa fa-github"></i><span onClick={()=>window.open("https://github.com/ateretcohen/")}>https://github.com/ateretcohen/</span></div>
     <br/>
      </div>
    );
  }
}

export default Conect;
