import React from 'react'
import WideR from './WideR.jpg'
import Time from './Time.jpg'
import JobPosting from './JobPosting.jpg'
import Details from './Details.jpg'
import JobAlert from './JobAlert.png'
import ApplicantTracker from './ApplicantTracker.jpg'
import EnhancedComm from './EnhancedComm.jpg'
import Analytics from './Analytics.avif'

export default function Advantages() {
  return (
      <div>
        <h1 className="text-center" style={{fontSize:"4rem",fontWeight:700,marginTop:'10rem'}}>Key Features</h1>

    <div style={{display:'flex',flexDirection:"row",margin:'7rem'}}>
      <div classname="card my-4">
  <img src={WideR} classname="card-img-top" alt="..." style={{width:'50rem'}}/>
</div>
<div className="container" style={{fontSize:'2.5rem'}}>
    <h2 style={{color:'#39a7f4',textAlign:'center',margin:'2rem'}}><u>WIDE REACH</u></h2>
  Reach a larger audience of job seekers and employers, increasing the chances of finding the right match.</div>
  </div>

<div style={{display:'flex',flexDirection:"row-reverse",margin:'10rem'}}>
      <div classname="card my-4">
  <img src={Time} classname="card-img-top" alt="..."/>
</div>
<div className="container" style={{fontSize:'2.5rem'}}>
<h2 style={{color:'#39a7f4',textAlign:'center',margin:'2rem'}}><u>TIME EFFICIENT</u></h2>
Speed up the hiring process by using automated tools for filtering, sorting, and managing applications.</div>
  </div>


  <div style={{display:'flex',flexDirection:"row",margin:'10rem'}}>
      <div classname="card my-4">
  <img src={JobPosting} classname="card-img-top" alt="..." style={{width:'50rem'}}/>
</div>
<div className="container" style={{fontSize:'2.5rem'}}>
<h2 style={{color:'#39a7f4',textAlign:'center',margin:'2rem'}}><u>EASY JOB POSTING</u></h2>
Employers can easily post job openings, specifying requirements and responsibilities.</div>
  </div>


<div style={{display:'flex',flexDirection:"row-reverse",margin:'10rem'}}>
      <div classname="card my-4">
  <img src={Details} classname="card-img-top" alt="..." style={{width:"50rem",border:'2px solid black'}}/>
</div>
<div className="container" style={{fontSize:'2.5rem'}}>
<h2 style={{color:'#39a7f4',textAlign:'center',margin:'2rem'}}><u>DETAILED JOB LISTING</u></h2>
Job seekers can view detailed job descriptions, requirements, and benefits.</div>
  </div>


<div style={{display:'flex',flexDirection:"row",margin:'10rem'}}>
      <div classname="card my-4">
  <img src={JobAlert} classname="card-img-top" alt="..."/>
</div>
<div className="container" style={{fontSize:'2.5rem'}}>
<h2 style={{color:'#39a7f4',textAlign:'center',margin:'2rem'}}><u>JOB ALERTS</u></h2>
Candidates can receive email notifications for relevant job openings based on their preferences.</div>
  </div>


<div style={{display:'flex',flexDirection:"row-reverse",margin:'10rem'}}>
      <div classname="card my-4">
  <img src={ApplicantTracker} classname="card-img-top" alt="..." style={{width:"60rem"}}/>
</div>
<div className="container" style={{fontSize:'2.5rem'}}>
<h2 style={{color:'#39a7f4',textAlign:'center',margin:'2rem'}}><u>APPLICANT TRACKING SYSTEM</u></h2>
Use an applicant tracking system to manage and track candidate applications.</div>
  </div>


<div style={{display:'flex',flexDirection:"row",margin:'10rem'}}>
      <div classname="card my-4" >
  <img src={EnhancedComm} classname="card-img-top" alt="..." style={{width:"60rem"}}/>
</div>
<div className="container" style={{fontSize:'2.5rem'}}>
<h2 style={{textAlign:'center',margin:'2rem',color:'#39a7f4'}}><u>ENHANCED COMMUNICATION</u></h2>
Facilitate communication between employers and candidates through messaging features.</div>
  </div>


<div style={{display:'flex',flexDirection:"row-reverse",margin:'10rem'}}>
      <div classname="card my-4">
  <img src={Analytics} classname="card-img-top" alt="..." style={{width:"50rem"}}/>
</div>
<div className="container" style={{fontSize:'2.5rem'}}>
<h2 style={{color:'#39a7f4',textAlign:'center',margin:'2rem'}}><u>ANALYTICS</u></h2>
Get insights into website traffic, job listing performance, and user behavior for better decision-making.</div>
  </div>


    </div>
  )
}
