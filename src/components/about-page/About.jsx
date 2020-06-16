import React, { Component } from "react";
import './about-style.scss'

class About extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }
 
  render() {
    return (
      <div className="about">
        {/* interviwer */}
         <p className="interviewer">Ateret, tell me little bit about your self</p><br/>
         {/* answer */}
         <p className="im">I'm 22, live in Elad.</p><br/>
         <p className="im">After high school, I started studying software engineering, I graduated in 2018.</p><br/>
         <p className="im">In 2019, I started studying Developing full-stack</p><br/>
         <p className="im">I'm fast-learner and I had good grades.</p><br/>
         <p className="im">From the start I knew I want it, I like the way of thinking and challenge.</p><br/>
         <p className="im">I think this world is amazing and big and I have a passion to know more and more.</p><br/>
         <p className="im">Now I'm practical in website and app development in Hi-Teach company.</p>
      </div>
    );
  }
}

export default About;
