import React from "react";

import "./About.css";
// import img1 
import img1 from "./images/img2.jpg"
import img2 from "./images/img1.jpg"
// import "./style2.css";

export default function About() {
  return (
    <div>
    <section>
      <div style={{padding: '5% 9%'}} >
        {/* Nav Bar */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href style={{fontSize: '40px', paddingTop: '0px'}}>yoga delight</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href>About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#pricing">Contact Us</a>
              </li>
              {/* <li class="nav-item">
            <a class="nav-link" href="#cta">Download</a>
          </li> */}
            </ul>
          </div>
        </nav>
        <div>
        </div></div></section>
    <section className="contact-section">
      <div className="contact-bg" style={{backgroundImage: `url(${img1})` }}>
        {/* <h3>Get in Touch with Us</h3> */}
        <h2>About us</h2>
        <div className="line">
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="row" style={{padding: '5% 9%'}}>
        <div className="col-lg-6">
          <h4 style={{color: 'black', textAlign: 'left'}} data-aos="fade-right" data-aos-duration={2000}>This is an realtime AI based Yoga Trainer which detects your pose how well you are doing. AI first predicts keypoints or coordinates of different parts of the body basically where they are present in an image and then it use another classification model to classify the poses if someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are doing correctly by making virtual skeleton green.Tensorflow library pretrained Movenet Model To Predict the Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose. The model have been trained in python because of tensorflowJS we can leverage the support of browser so the keras/tensorflow model have been converted  to tensorflowJS.</h4>
        </div>
        <div className="col-lg-1">
        </div>
        <div className="col-lg-5" data-aos="fade-left" data-aos-duration={2000}>
          <img src={img2} alt="" width="500px" height="500px" />
        </div>
      </div>
      <div className="contact-footer">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="#" className="fab fa-facebook-f" />
          <a href="#" className="fab fa-twitter" />
          <a href="#" className="fab fa-instagram" />
          <a href="#" className="fab fa-linkedin" />
          <a href="#" className="fab fa-youtube" />
        </div>
      </div>
    </section>
  </div>
  );
}

// import React from 'react'

// import './About.css'

// export default function About() {
//     return (
//         <div className="about-container">
//             <h1 className="about-heading">About</h1>
//             <div className="about-main">
//                 <p className="about-content">
//                     This is an realtime AI based Yoga Trainer which detects your pose how well you are doing.
//                     I created this as a personal project, and I have also deployed this project
//                     so people can use it and mainly the developers can who are learning AI can learn
//                     from this project and make their own AI or they can also improve in this project.
//                     This is an open source project, The code is available on the GitHub - <a href="https://github.com/harshbhatt7585/YogaIntelliJ">https://github.com/harshbhatt7585/YogaIntelliJ</a>

//                     This AI first predicts keypoints or coordinates of different parts of the body(basically where
//                     they are present in an image) and then it use another classification model to classify the poses if
//                     someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are
//                     doing correctly(by making virtual skeleton green). I have used Tensorflow pretrained Movenet Model To Predict the
//                     Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.

//                     I have trained the model in python because of tensorflowJS we can leverage the support of browser so I converted
//                     the keras/tensorflow model to tensorflowJS.
//                 </p>
//                 <div className="developer-info">
//                     <h4>About Developer</h4>
//                     <p className="about-content">I am Harsh, I am Full Stack Developer, AI Enthusiastic, Content Creator, Tutor,
//                         I love to work with technology and love to share on my youtube channel,
//                         I hope this project will help you.
//                     </p>
//                     <h4>Contact</h4>
//                     <a href="https://www.instagram.com/codedharsh75/"><p className="about-content">Instagram</p></a>
//                     <a href="https://www.youtube.com/channel/UCiD7kslR7lKSaPGSQ-heOWg"><p  className="about-content">Youtube</p></a>
//                     <a href="https://github.com/harshbhatt7585"><p  className="about-content">GitHub</p></a>
//                 </div>
//             </div>
//         </div>
//     )
// }
