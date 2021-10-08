import React from "react";
import AboutImage1 from "./img/img1.png";
function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={AboutImage1} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              About NexGenSoftware,
              We Provide Services to Companies in various aspects.
              Web development, Android App, Data Entry, E-Commerce, Cyber-Security.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
