import React, { Component } from "react";
import './home-style.scss'
import { Link } from "react-router-dom";
import AllProjects from "../projects-page/AllProjects";

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
    let projects=this.props.projectsList.filter((project,i)=>(i<3))
    console.log(projects);
    return (
      <div className="home">
        {
          this.props.lan==="hebrow"?
          <div>
              <p className="im">(: ברוכים הבאים לבלוג שלי! תודה שהצטרפת</p>
              <p className="im">.המטרה של הבלוג שלי היא להציג את עצמי והנסיון שלי בצורה קצת שונה</p>
              <p className="im">Json.JS זיכרון מקומי בקובץ Html, scss עיצוב React.JS את האתר בניתי בטכנולוגית</p>
          </div>
          :
          <div>
             <p className="im">Wellcome to my blog! Thanks for joining.</p>
             <p className="im">The purpose of my blog is to tell you about myself and my experience in a different way.</p>
             <p className="im">Combines algorithms with React.JS and design with html scss, local database- using Json.JS.</p>
          </div>
      }
      
      <button className="viewCode" onClick={()=>this.props.history.push("/tecnologies")}>{ this.props.lan==="hebrow"?"עוד טכנולוגיות":"view more"}</button>
      
     {/* projects */}
     {
          this.props.lan==="hebrow"?
          <p className="im"> :אני רוצה להציג בפניכם מספר פרויקטים אשיים שבניתי במהלך הלימודים</p>
          :
          <p className="im">I want to show you some of my personal projects:</p>
     }
     {
       projects.map(project=>{
         return <AllProjects openProject={this.openProject} Id={project.Id} Name={project.Name} Img={project.Img} Tec={project.Tec} Link={project.Link} lan={this.props.lan}/>
       })
     }
      <button className="viewCode" onClick={()=>this.props.history.push("/projects")}>{ this.props.lan==="hebrow"?"עוד פרויקטים":"view more"}</button>
      </div>
    );
  }
}

export default Home;
