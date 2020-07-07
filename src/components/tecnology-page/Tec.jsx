import React, { Component } from "react";
import './tec-style.scss'
import AllTec from "./AllTec";


class Tec extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
     }
 }
 
  render() {
    return (
      <div className="tec">
           {
             this.props.TecList.map(tec=>{
             return <AllTec Tec={tec.Tec} Exp={tec.Exp} Img={tec.Img}/>
             })
           }
      </div>
    );
  }
}

export default Tec;
