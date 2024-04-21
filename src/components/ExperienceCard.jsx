import React from "react";
import './ExperienceCard.css'

export default function ExperienceCard({ details }) {
 return (
  <section>
   <div className="creative-experience-card">
    <h6>{details.title}</h6>

    <ul>
     {details.about.map((item) => (
      <li key={item}>{item}</li>
     ))}
    </ul>
   </div>
  </section>
 );
}