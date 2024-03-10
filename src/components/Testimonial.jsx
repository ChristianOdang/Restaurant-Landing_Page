import React from 'react'
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

function Testimonial() {
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Testimonial</p>
        <h1 className='primary-heading'>What They Are Saying</h1>
        <p className='primary-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          officia, at necessitatibus adipisci consequatur molestias animi eum
          velit vero facere ab amet mollitia, quia saepe!
        </p>
      </div>
      <div className='testimonial-section-bottom'>
        <img src={ProfilePic} alt='' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          blanditiis, at harum ipsa delectus voluptas reiciendis doloribus
          officiis. A expedita voluptatem illum perferendis sed optio.
        </p>
        <div className='testimonials-stars-container'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Johnny Son</h2>
      </div>
    </div>
  );
}

export default Testimonial