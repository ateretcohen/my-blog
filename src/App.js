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
import ProjectKind from "./components/projectKind-page/ProjectKind";


class App extends Component {
  state = {
    open:true,
    display:"darkApp",
    projectsList:[]
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
        Id: project.Id,
        Img:String(project.Img) ,
        Link: project.Link,
        Name: project.Name
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
  render() {
    return (
      <div className={this.state.display}>
        {
          this.state.open?
          <Open/>
          :
          <Router basename="my-blog" history={history}>
          <Panel/>
          <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/menu"} render={(props) => <Menu {...props} chengeDisplay={this.chengeDisplay} display={this.state.display}/>}/>
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/projects"} render={(props) => <Projects {...props} projectsList={this.state.projectsList}/>}/>
          <Route exact path={"/projectsKind"} render={(props) => <ProjectKind {...props} />}/>

          </Switch>
          </Router>
        } 
      </div>
    );
  }
}

export default App;