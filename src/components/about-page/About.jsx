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
        {
          this.props.lan==="hebrow"?
          <div>
         {/* interviwer */}
         <p className="interviewer">עטרת, ספרי לי על עצמך</p><br/>
         <p className="im-s">.אני בת 22, השניה במשפחה שלי ואני גרה באלעד</p><br/>
         <p className="im-s">אחרי התיכון התחלתי בלימודי תעודה להנדסאית תוכנה סיימתי את לימודי ב 2018</p><br/>
         <p className="im-s"> SvCollege במכללת Full-Stack אחר כך למדתי קורס פיתוח </p><br/>
         <p className="im">הנסיון המעשי שלי הוא מפרויקטים אשיים שפיתחתי במהלך הלימודים
           . והתלמדות מעשית בחברת הייטק בתפקיד מפתחת אתרי אינטרנט ואפליקציות </p><br/>
          <p className="im">.במהלך הלימודים, הפרויקטים וכן ההתלמדות המעשית בלטתי בכישורי, וקיבלתי פידבקים טובים על עבודה מקצועית ויעילה</p><br/>
          <p className="im">.בעלת קליטה מהירה לטכנולוגיות חדשות, חשיבה יצירתית מחוץ לקופסא. ורבלית, חברותית ויחסי אנוש מעולים</p><br/>
         {/* interviwer */}
         <p className="interviewer">ספרי לי על התפקיד האחרון שלך</p><br/>
         <p className="im-s">.תפקידי היה פיתוח אפליקציות ואתרי אינטרנט</p><br/>
         <p className="im-s"> 
          <div>.React.js JavaScript הפיתוח בעיקר היה בשפות </div> 
          <div>.html, bootstrap/css/scss עיצוב ובניה בשפות</div>
          <div>.json.js וזיכרון מקומי בקיבצי PostMan מסד נתונים מקושר ע"י</div>
          
          </p><br/>
         <p className="im-s">זה היה אתגר התחלתי מצויין בשבילי </p><br/>
         <p className="im">. דריסת הרגל הראשונה שלי בתחום ההייטק. נהנתי מאוד מהעבודה, הרחבתי את הידע שלי ולמדתי שימוש בטכנולוגיות חדשות, עבודת הצוות היתה באווירה טובה ומפרגנת וקיבלתי פידבקים טובים על העבודה שלי
         </p><br/>
         {/* interviwer */}
         <p className="interviewer">ספרי לי על התכונות הבולטות שלך</p><br/>
         <p className="im">.בעלת מוטיבציה גבוהה, הבנה ותפיסה מהירה, אוריינטציה טכנולוגית ולוגית, יצירתיות, סבלנות. יחסי אנוש מעולים, יכולת עבודה בצוות ולבד, למידה עצמית ועמידה ביעדים</p><br/>
         <p className="interviewer">ספרי לי על התחביבים שלך</p><br/>
         <p className="im-s">.לפני מספר חודשים התחלתי ללמוד פסנתר, תמיד זה היה חלום שלי ועכשיו אני מגשימה אותו</p><br/>

          </div>
          :
          <div>
         {/* interviwer */}
         <p className="interviewer">Ateret, tell me little bit about your self</p><br/>
         <p className="im-s"> I’m 22 years old, I’m the second in my family, live in Elad.</p><br/>
         <p className="im">After high school I started to study program developer diploma,I graduated in 2018.
          Additionally In 2019, I study full-stack developer diploma in SVcollege- Tel Aviv.</p><br/>
         <p className="im"> My experience is from my personal projects during my study and
          in March I started a work Practical in hi-teach company - I develop windows and iOS web app.</p><br/>
          <p className="im">I am always above average in my studies, projects and my Practical work.
          I have creative thinking and fast learn of new technologies.
          confidence, frindly And Excellent in human relations skills.
          </p><br/>
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
         <p className="im-s">A few month ago, I started playing piano always it was my dream and now that's my hobby.</p><br/>

          </div>
        }
       
      
      
      </div>
    );
  }
}

export default About;
