import React, { Component } from "react";
import './App.scss';
import history from './history';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Open from './components/open-page/Open';
import 'font-awesome/css/font-awesome.min.css';
import Home from "./components/home-page/Home";
import Panel from "./components/panel/Panel";
import Menu from "./components/menu-page/Menu";
import About from "./components/about-page/About";
import Projects from "./components/projects-page/Projects";
import Data from './projects-data.json'
import ProjectComputer from "./components/projectKind-page/ProjectComputer";


class App extends Component {
  state = {
    open:true,
    display:"darkApp",
    projectsList:[],
    openProject:0,
    lan:"hebrow"
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({open:false})
    }, 1000);

    //all-projects
    let projectsList=[];
    Data.map(project=>{
        projectsList.push({
        AppKind:project.AppKind,
        Tec:project.Tec,
        Id: project.Id,
        Img:String(project.Img),
        Link: project.Link,
        Name: project.Name,
        description:project.description
        })
   })
   this.setState({projectsList:projectsList})
  }
  chengeDisplay=(display)=>{
    display==="Dark"?
    this.setState({display:"darkApp"})
    :
    this.setState({display:"lightApp"})
  }
  openProject=(Id)=>{
     this.setState({openProject:Id})
  }
  chengeLan=(lan)=>{
    lan==="hebrow"?
    this.setState({lan:"hebrow"})
    :
    this.setState({lan:"english"})
  }
  render() {
    return (
      <div id={this.state.lan} className={this.state.display}>
        {
          this.state.open?
          <Open/>
          :
          <Router basename="my-blog" history={history}>
          <Panel lan={this.state.lan}/>
          <Switch>
          <Route exact path={"/"} render={(props) => <Home {...props} projectsList={this.state.projectsList} openProject={this.openProject}/>}/>
          <Route exact path={"/menu"} render={(props) => <Menu {...props} chengeDisplay={this.chengeDisplay} display={this.state.display} lan={this.state.lan} chengeLan={this.chengeLan}/>}/>
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/projects"} render={(props) => <Projects {...props} projectsList={this.state.projectsList} openProject={this.openProject}/>}/>
          <Route exact path={"/pComputer"} render={(props) => <ProjectComputer {...props} Id={this.state.openProject} object={this.state.projectsList[this.state.openProject]}/>}/>
          </Switch>
          </Router>
        } 
      </div>
    );
  }
}

export default App;