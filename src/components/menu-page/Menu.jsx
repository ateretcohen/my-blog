import React, { Component } from "react";
import './menu-style.scss'
import { Link } from "react-router-dom";
import { Document } from 'react-pdf'

class Menu extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
        download:false,
        language:false,
        display:false
        
     }
 }
 
  render() {
    return (
      <div className="menu">
         <hr/>
         <div className="menu-actions" id="about" onClick={()=>this.props.history.push("/about")}>
         <i style={{color:"var(--red"}} class="fa fa-address-card"></i><span>About me</span>
         </div>
         <hr/>
         
         
         <div className="menu-actions" id="projects">
         <i class="fa fa-tasks"></i><span>All my projects</span>
         </div>
         <hr/>

         <div className="menu-actions" id="Download" onClick={()=>this.setState({download:!this.state.download})}>
         <i style={{color:"var(--orenge)"}} class="fa fa-download"></i> <span>Download CV</span> <i id="down" class="fa fa-angle-down"></i>
         </div>
        
         {
             this.state.download?
             <div>
             <div className="check-box">
             <hr/>
                 <a href={require('./ATERET COHEN CV.pdf')} download><p className="download-p">Click to download english CV</p> </a> 
                 <hr/>
                 <a href={require('./קורות חיים - עטרת כהן.pdf')} download><p className="download-p">Click to download hebrow CV</p> </a>
                 <hr/>
                 </div>
             </div>
             :null
         }
        
         <hr/>
         <div className="menu-actions" id="language" onClick={()=>this.setState({language:!this.state.language})}>
         <i style={{color:"var(--blue)"}} class="fa fa-language"></i><span>language</span><i id="down" class="fa fa-angle-down"></i>
         </div>
         {
             this.state.language?
             <div>
               <div className="check-box">
                 <hr/>
                 <p className="language-p">Hebrew</p>
                 <hr/>
                 <p className="language-p">English</p>
                 <hr/>
                 </div>
             </div>
             :null
         }
         <hr/>
         <div className="menu-actions" id="Display" onClick={()=>this.setState({display:!this.state.display})}>
         <i style={{color:"var(--green)"}} class="fa fa-tv"></i> <span>Display</span><i id="down" class="fa fa-angle-down"></i>
         </div>
         {
             this.state.display?
             <div>
               <div className="check-box">
                 <hr/>
                 <p className="Display-p" onClick={()=>this.props.chengeDisplay("Dark")}>Dark</p>
                 <hr/>
                 <p className="Display-p" onClick={()=>this.props.chengeDisplay("Light")}>Light</p>
                 <hr/>
                 </div>  
             </div>
             :null
         }
         <hr/>

      </div>
    );
  }
}

export default Menu;
