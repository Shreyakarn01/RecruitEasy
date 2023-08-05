import React from 'react'
import Hiring from './Hiring.jpg'
import Hiring1 from './Hiring1.avif'
import Hiring2 from './Hiring2.webp'
import Companies2 from './Companies2.gif'

export default function Main() {
  return (
    <>
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Hiring} className="d-block w-100" height="700px" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Hiring1} className="d-block w-100" height="700px" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Hiring2} className="d-block w-100" height="700px" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="text-center">
<button type="button" class="btn btn-success btn-lg" style={{margin:'2rem'}}>&nbsp;&nbsp;&nbsp;Apply Now&nbsp;&nbsp;&nbsp;</button>
</div>

<div className="container my-4 text-center">

    <h1 style={{marginTop:'7rem',fontWeight:700}}>Leading Companies Build Teams on RecruitEasy</h1>
    <img src={Companies2} className="d-block w-100 my-4" height="700px" alt="..." style={{border:'2px solid red'}}/>
   
</div>
    </div>

   </>
  ) 
}


