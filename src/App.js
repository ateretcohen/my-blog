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


class App extends Component {
  state = {
    open:true,
    display:"darkApp"
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({open:false})
    }, 1000);
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
          <Route exact path={"/projects"} component={Projects} />

          </Switch>
          </Router>
        } 
      </div>
    );
  }
}

export default App;