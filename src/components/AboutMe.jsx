
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import pic1 from '../assets/images/html.jpg'
import pic2 from '../assets/images/css.jpg'
import pic3 from '../assets/images/tailwind.png'
import pic4 from '../assets/images/bootstrap.png'
import pic5 from '../assets/images/javascript.png'
import pic6 from '../assets/images/react.jpg'
import pic7 from '../assets/images/c.png'
import pic8 from '../assets/images/cpp.png'
import pic9 from '../assets/images/python.jpg'
import pic10 from '../assets/images/java.jpg'
import pic11 from '../assets/images/django-logo-positive.png'
import pic12 from '../assets/images/git.png'
import pic13 from '../assets/images/github.png'
export const Aboutme = () => {
  return (
    <section className="aboutme" id="abtme">
      <Container>
          <h1>{`A bit about me`} </h1>
            <br></br>
            <p>I am a third-year student at the Birla Institute of Technology, Mesra, majoring in Computer Science and Engineering</p>
            <br></br>
            <p> 
                A problem solver and a extremly curious person, I have dabbled and suceeded in having sound but proficient knowledge about
                data structure and algorithms and the MERN stack. I have also dabbled into Competitve Programming and Arduino, also managing 
                to excel both of those fields. I am currently a pupil on CodeForces with Max Rating of 1340. I have also managed to secure 2nd
                place in College's Biggest Annual Hackathon , Hatch From Scratch, out of the participating 50+ teams.
                I am always up for challenges and currently exploring what Computer Science has to offer
            </p>
            <br></br>
            <p>
                As an active member of college's ACM, IEEE, IET and GDSC student chapters, I have conducted C++ and DSA Workshop for over 300
                students proving my ability to lead and guide people in areas that I am proficient at. 
                These are some of the languages that are in my tech stack: 
            </p>
            <section id ="skills">
                <div class="logos">
                    <div class="logos-slide">
                        <img src= {pic1} />
                        <img src = {pic2} />
                        <img src= {pic3} />
                        <img src = {pic4} />
                        <img src= {pic5} />
                        <img src = {pic6} />
                        <img src= {pic7} />
                        <img src = {pic8} />
                        <img src= {pic9} />
                        <img src = {pic10} />
                        <img src = {pic11} />
                        <img src = {pic12} />
                        <img src = {pic13} />
                    </div> 
                    <div class="logos-slide">
                        <img src= {pic1} />
                        <img src = {pic2} />
                        <img src= {pic3} />
                        <img src = {pic4} />
                        <img src= {pic5} />
                        <img src = {pic6} />
                        <img src= {pic7} />
                        <img src = {pic8} />
                        <img src= {pic9} />
                        <img src = {pic10} />
                        <img src = {pic11} />
                        <img src = {pic12} />
                        <img src = {pic13} />
                    </div> 
                </div>
            </section>
        </Container>
    </section>
  )
}
