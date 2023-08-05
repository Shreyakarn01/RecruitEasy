import React from 'react'
import pass from './pass.jpg'
import pass1 from './pass1.png'
import pass2 from './pass2.png'
import pass3 from './pass3.jpeg'
import pass4 from './pass4.webp'

export default function Reviews() {
  return (
    <>
    <div className="feed">
    <h1 className="text-center" style={{margin:'2rem'}}>Client Success Stories</h1>
        <div className="top">
        <div className="card" style={{width:'18rem',borderRadius:'1.5rem'}}>
  <img src={pass} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span><b>Sarah Adams - HR Manager</b></span>
    <p className="card-text">I had a fantastic experience working with RecruitEasy. They understood our company culture and requirements perfectly. Within no time, we found the ideal candidate for a critical role. Highly recommended!</p>
  </div>
</div>
        <div className="card" style={{width:'18rem',borderRadius:'1.5rem'}}>
  <img src={pass1} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span><b>Jane Smith - Marketing Manager</b></span>
    <p className="card-text">I've been impressed with RecruitEasy's professionalism and dedication. They went above and beyond to find candidates with the right skills and attitude. Thanks to them, we have a strong marketing team now.</p>
  </div>
</div>
        <div className="card" style={{width:'18rem',borderRadius:'1.5rem'}}>
  <img src={pass2} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span><b>John Doe - Tech Company CEO</b></span>
    <p className="card-text">I couldn't have asked for a better recruitment agency. RecruitEasy provided personalized guidance throughout the job search process. They helped me secure my dream job, and I'm grateful for their support.</p>
  </div>
</div>
</div>

<div className="bottom">
        <div className="card" style={{width:'18rem',borderRadius:'1.5rem'}}>
  <img src={pass3} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span><b>Emily Thompson - IT Specialist</b></span>
    <p className="card-text">Working with RecruitEasy was a refreshing experience. Their team was responsive and focused on understanding our company's unique needs. They delivered top-notch candidates, making our hiring decisions easier.</p>
  </div>
</div>
        <div className="card" style={{width:'18rem',borderRadius:'1.5rem'}}>
  <img src={pass4} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span><b>Michael Lee - Finance Director</b></span>
    <p className="card-text">I've used RecruitEasy for multiple job searches, and they consistently impressed me with their efficiency and dedication. They have a vast network of employers, and their guidance was instrumental in my career growth.</p>
  </div>
</div>
</div>
</div>
</>
  )
}
