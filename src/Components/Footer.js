import React from 'react'
import Icon from './Icon.png'
import LI1 from './LI1.png'
import insta from './insta.png'
import fb3 from './fb3.png'
import twit2 from './twit2.png'

export default function Footer() {
  return (
    <div>
      <footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary my-footer">
  <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary" >
    <div class="row">
      <div class="col-lg-3 mb-3">
        <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
        <img src={Icon} alt="" style={{filter:'invert(1)'}}/>
          <span class="fs-5 text">RecruitEasy</span>
        </a>
        <ul class="list-unstyled small">
          <li class="mb-2 text">Connecting talent to opportunity, one hire at a time <a className="text" href="/docs/5.3/about/team/">RecruitEasy team</a> with the help of <a className="text" href="/">our contributors</a>.</li>
          <li class="mb-2 text">Unlocking potential, transforming careers</li>
          <li class="mb-2 text">Empowering businesses with the right talent.</li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 offset-lg-1 mb-3 text">
        <h5 className="mod">Contact Information</h5>
        <ul class="list-unstyled">
          <li class="mb-2">Address: Hinjewadi,Pune : 401177</li>
          <li class="mb-2">Phone: 6287444945, 7654321987</li>
          <li class="mb-2">Email: recruiteasy@gmail.com</li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3 text">
        <h5 className="mod">Quick Links</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a className="text" href="/">Home</a></li>
          <li class="mb-2"><a className="text" href="/">Job Listings</a></li>
          <li class="mb-2"><a className="text" href="/">Candidate Registration</a></li>
          <li class="mb-2"><a className="text" href="/">Employer Registration</a></li>
          <li class="mb-2"><a className="text" href="/">About Us</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3 text">
        <h5 className="mod">Privacy Policy and Terms of Service</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a className="text" href="/" target="_blank" rel="noreferrer" >Terms and Conditions</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3 text">
        <h5 className="mod">Social Media Links:</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a className="text" href="/" target="_blank" rel="noreferrer" ><img src={LI1} alt="" style={{filter:'invert(1)'}}/> : recruiteasy@linkedIn.com</a> </li>
          <li class="mb-2"><a className="text" href="/" target="_blank" rel="noreferrer" ><img src={fb3} alt="" style={{filter:'invert(1)'}}/> : recruiteasy@facebook.com</a></li>
          <li class="mb-2"><a className="text" href="/" target="_blank" rel="noreferrer" ><img src={insta} alt="" style={{filter:'invert(1)'}}/> : recruiteasy@instagram.com</a></li>
          <li class="mb-2"><a className="text" href="/" target="_blank" rel="noreferrer" ><img src={twit2} alt="" style={{filter:'invert(1)'}}/> : recruiteasy@twitter.com</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="text text-center">Copyright © 2023 RecruitEasy. All rights reserved.
</div>
</footer>
    </div>
  )
}
