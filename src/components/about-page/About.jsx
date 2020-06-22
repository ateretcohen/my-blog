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
        <br/><br/>
        {/* interviwer */}
         <p className="interviewer">Ateret, tell me little bit about your self</p><br/>
         {/* answer */}
         <p className="im-s">My name is Ateret, I’m 22 years old, I’m the second in my family, live in Elad.</p><br/>
         <p className="im">After high school I started to study program developer diploma,I graduated in 2018.
          Additionally In 2019, I study full-stack developer diploma in SVcollege- Tel Aviv.</p><br/>
         <p className="im"> My experience is from my personal projects during my study and
          in March I started a work Practical in hi-teach company - I develop windows and iOS web app.</p><br/>


         {/* interviwer */}
         <p className="interviewer">tell me little bit about last experience</p><br/>

         <p className="im-s">Developer website and app position.</p><br/>
         <p className="im">development and algorithm building- using React.js, html, design -using bootstrap/css/scss, 
          Database connection - using PostMan, local storage-using json.js.</p><br/>
         <p className="im">that was great challenge!</p><br/>
         <p className="im">that was my first experience in hi-tech company.
         I learned new things and technologies, I liked the team working, they push me up.
         my dream is to be good developer, and I got good feedback and appreciated my work.
         </p><br/>

         {/* interviwer */}
         <p className="interviewer">What are your good qualities?</p><br/>

         <p className="im">Highly motivated, fast-learner, technologically and logically oriented, creative, patient. Excellent in human relations skills, team player, industrious.</p><br/>
        
         <p className="interviewer">What are your hobbies?</p><br/>

         <p className="im-s">A year ago, I started playing piano and that's my hobby.</p><br/>

      
      
      </div>
    );
  }
}

export default About;
