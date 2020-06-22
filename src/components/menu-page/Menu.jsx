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
         <div className="menu-actions" id="home" onClick={()=>this.props.history.push("/")}>
         <i id="icon-menu" style={{color:"var(--green)"}} class="fa fa-home"></i>
         {
            this.props.lan==="hebrow"?
            <div className="span-menu"><span>דף הבית</span></div>
            :
            <span>Home</span>
         }
         
         </div>
         <hr/>
         <div className="menu-actions" id="about" onClick={()=>this.props.history.push("/about")}>
         <i id="icon-menu" style={{color:"var(--red"}} class="fa fa-address-card"></i>
         {
            this.props.lan==="hebrow"?
            <div className="span-menu"><span>אודותי</span></div>
            :
            <span>About me</span>
         }
         </div>
         <hr/>
         
         
         <div className="menu-actions" id="projects" onClick={()=>this.props.history.push("/projects")}>
         <i id="icon-menu" class="fa fa-tasks"></i>
         {
            this.props.lan==="hebrow"?
            <div className="span-menu"><span>הפרויקטים שלי</span></div>
            :
            <span>All my projects</span>
         }
         
         </div>
         <hr/>

         <div className="menu-actions" id="Download" onClick={()=>this.setState({download:!this.state.download})}>
         <i id="icon-menu" style={{color:"var(--orenge)"}} class="fa fa-download"></i>
         {
            this.props.lan==="hebrow"?
            <div className="span-menu"><span>קובץ קורות חיים להורדה</span></div>
            :
            <span>Download CV</span>
         }
         <i id="down" class="fa fa-angle-down"></i>
         </div>
        
         {
             this.state.download?
             <div>
             <div className="check-box">
             <hr/>
                 <a href={require('./ATERET COHEN CV.pdf')} download><p className="download-p">
                 {this.props.lan==="hebrow"?"לחץ כאן כדי להוריד קובץ קורות חיים באנגלית":"Click to download english CV"}</p> </a> 
                 <hr/>
                 <a href={require('./קורות חיים - עטרת כהן.pdf')} download><p className="download-p">
                 {this.props.lan==="hebrow"?"לחץ כאן כדי להוריד קובץ קורות חיים בעברית":"Click to download hebrow CV"}</p> </a>
                 <hr/>
                 </div>
             </div>
             :null
         }
        
         <hr/>
         <div className="menu-actions" id="language" onClick={()=>this.setState({language:!this.state.language})}>
         <i id="icon-menu" style={{color:"var(--blue)"}} class="fa fa-language"></i>
         {
            this.props.lan==="hebrow"?
            <div className="span-menu"><span>שפה</span></div>
            :
            <span>Language</span>
         }
         <i id="down" class="fa fa-angle-down"></i>
         </div>
         {
             this.state.language?
             <div>
               <div className="check-box">
                 <hr/>
                 <p className="language-p" onClick={()=>this.props.chengeLan("hebrow")}>
                 {this.props.lan==="hebrow"?"עברית":"Hebrew"}</p>
                 <hr/>
                 <p className="language-p" onClick={()=>this.props.chengeLan("English")}>
                 {this.props.lan==="hebrow"?"אנגלית":"English"}</p>
                 <hr/>
                 </div>
             </div>
             :null
         }
         <hr/>
         <div className="menu-actions" id="Display" onClick={()=>this.setState({display:!this.state.display})}>
         <i id="icon-menu" style={{color:"var(--green)"}} class="fa fa-tv"></i>
         {
            this.props.lan==="hebrow"?
            <div className="span-menu"><span>תצוגה</span></div>
            :
            <span>Display</span>
         }
         <i id="down" class="fa fa-angle-down"></i>
         </div>
         {
             this.state.display?
             <div>
               <div className="check-box">
                 <hr/>
                 <p className="Display-p" onClick={()=>this.props.chengeDisplay("Dark")}>
                  {this.props.lan==="hebrow"?"כהה":"Dark"}</p>
                 <hr/>
                 <p className="Display-p" onClick={()=>this.props.chengeDisplay("Light")}>
                 {this.props.lan==="hebrow"?"בהיר":"Light"}</p>
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
