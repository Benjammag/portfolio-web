import React, { useRef } from 'react';
import './CreativeExperience.css';
import ExperienceCard from './ExperienceCard';
import { CREATIVE_EXPERIENCE } from '../utils/data';
import Slider from "react-slick";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function CreativeExperience() {
 const sliderRef = useRef();

 const settings = {
  dots:false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
   {
    breakpoint: 769,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1
    },
   },
  ],
 };

 const slideRight = () => {
  sliderRef.current.slickNext();
 };

 const slideLeft = () => {
  sliderRef.current.slickPrev();
 };

 return (
  <section id='experience' className="experience-container">
   <h5>Creative Experience</h5>

   <div className="experience-content">
    <div className="arrow-right" onClick={slideRight}>
     <span className="material-symbols-outlined"><FaAngleRight /></span>
    </div>

    <div className="arrow-left" onClick={slideLeft}>
     <span className="material-symbols-outlined"><FaAngleLeft /></span>
    </div>

    <Slider ref={sliderRef} {...settings}>

    {CREATIVE_EXPERIENCE.map((item) => (
     <ExperienceCard key={item.title} details={item} />
    ))}
    </Slider>
   </div>
  </section>
 )
}