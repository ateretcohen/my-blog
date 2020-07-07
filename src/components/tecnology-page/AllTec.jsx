import React, { Component } from "react";
import './tec-style.scss'


class AllTec extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
     }
 }
 
  render() {
    return (
      <div className="all-tec">
          
          <img className="tec-img" src={require("./imgs/"+this.props.Img)} alt="tecnologis"/>
          <p><b>{this.props.Tec}</b></p>
          <p>experience:</p>
          <p>{this.props.Exp}</p>
      </div>
    );
  }
}

export default AllTec;
