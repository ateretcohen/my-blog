import React, { Component } from "react";
import './home-style.scss'
import { Link } from "react-router-dom";

class Home extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }
 openProject=(Id)=>{
  this.props.openProject(Id)
  this.props.history.push("/pComputer")
}
  render() {
    return (
      <div className="home">
        {
          this.props.lan==="hebrow"?
          <div>
              <p className="im">(: ברוכים הבאים לבלוג שלי! תודה שהצטרפת</p>
              <p className="im">.המטרה של הבלוג שלי היא להציג את עצמי והנסיון שלי בצורה קצת שונה</p>
              <p className="im">Json.JS זיכרון מקומי בקובץ Html, scss עיצוב React.JS את האתר בניתי בטכנולוגית</p>
              <p className="im"> :אני רוצה להציג בפניכם מספר פרויקטים אשיים שבניתי במהלך הלימודים</p>
          </div>
          :
          <div>
             <p className="im">Wellcome to my blog! Thanks for joining.</p>
             <p className="im">The purpose of my blog is to tell you about myself and my experience in a different way.</p>
             <p className="im">Combines algorithms with React.JS and design with html scss, local database- using Json.JS.</p>
             <p className="im">I want to show you some of my personal projects:</p>
          </div>
        }
     

      <div className="projects" onClick={()=>this.openProject(this.props.projectsList[0].Id)}>
      <p className="title">{this.props.projectsList[0].Name}</p>
      <p>{this.props.projectsList[0].Tec}</p>
        <img className="project-img" src={require("./"+this.props.projectsList[0].Img)} alt="notes project"/>
      </div>
      <div className="projects" onClick={()=>this.openProject(this.props.projectsList[1].Id)}>
        <p>{this.props.projectsList[1].Name}</p>
        <p>{this.props.projectsList[1].Tec}</p>
         <img className="project-img" src={require("./"+this.props.projectsList[1].Img)} alt="sudoku project"/>
      </div>
      <div className="projects" onClick={()=>this.openProject(this.props.projectsList[2].Id)}>
        <p>{this.props.projectsList[2].Name}</p>
        <p>{this.props.projectsList[2].Tec}</p>
         <img className="project-img" src={require("./"+this.props.projectsList[2].Img)} alt="cafe cafe project"/>
      </div>
      <button className="viewCode" onClick={()=>this.props.history.push("/projects")}>{ this.props.lan==="hebrow"?"עוד פרויקטים":"view more"}</button>
      </div>
    );
  }
}

export default Home;
