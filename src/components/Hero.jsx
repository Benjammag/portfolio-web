import "./Hero.css";
import React from "react";
export default function Hero() {
 return(
  <section className="hero-container">
   <div className="hero-content">
    <h2>Building Digital Experiences That Inspire</h2>
    <p>
     Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
    </p>
   </div>

   <div className="hero-img">
    <div>
     <div className="tech-icon">
     <img src="./assets/images/react.png" alt="" />
    </div>
    <img id="tech" src="./assets/images/devop.png" alt="" />
    </div>

    <div>
     <div className="tech-icon">
      <img src="./assets/images/html.png" alt="" />
     </div>
     <div className="tech-icon">
      <img src="./assets/images/css.png" alt="" />
     </div>
     <div className="tech-icon">
      <img src="./assets/images/js.png" alt="" />
     </div>
    </div>
   </div>
  </section>
 )
}