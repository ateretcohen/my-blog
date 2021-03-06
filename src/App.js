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
import Conect from "./components/conect-page/Conect";
import Tec from "./components/tecnology-page/Tec";
import TecData from "./components/tecnology-page/tecnologis.json"


class App extends Component {
  state = {
    open:true,
    display:"darkApp",
    projectsList:[],
    openProject:0,
    lan:"English",
    TecList:[]
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

   let TecList=[];
   TecData.map(tec=>{
    TecList.push({
       Tec:tec.tec,
       Exp:tec.exp,
       Img:tec.img
     })
   })
   this.setState({TecList:TecList})   
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
          <Route exact path={"/"} render={(props) => <Home {...props} projectsList={this.state.projectsList} openProject={this.openProject} lan={this.state.lan} TecList={this.state.TecList}/>}/>
          <Route exact path={"/menu"} render={(props) => <Menu {...props} chengeDisplay={this.chengeDisplay} display={this.state.display} lan={this.state.lan} chengeLan={this.chengeLan}/>}/>
          <Route exact path={"/about"} render={(props) =><About lan={this.state.lan}/> } />
          <Route exact path={"/projects"} render={(props) => <Projects {...props} projectsList={this.state.projectsList} openProject={this.openProject} lan={this.state.lan}/>}/>
          <Route exact path={"/pComputer"} render={(props) => <ProjectComputer {...props} Id={this.state.openProject} object={this.state.projectsList[this.state.openProject]} lan={this.state.lan}/>}/>
          <Route exact path={"/tecnologies"} render={(props) => <Tec {...props} TecList={this.state.TecList}/>}/>
          </Switch>
          {/* <Conect/> */}
          </Router>
        } 
      </div>
    );
  }
}

export default App;