import React, { useState } from "react";
import { Link } from 'gatsby';

import '../styles/global.scss';
import '../styles/landing.scss';
import '../styles/navbar.scss';

import dribbbleIcon from '../../static/navbar-svgs/dribbble_icon.svg';
import dribbbleHover from '../../static/hover-svgs/dribbble_hover.svg';
import linkedinIcon from '../../static/navbar-svgs/linkedin_icon.svg';
import linkedinHover from '../../static/hover-svgs/linkedin_hover.svg';
import emailIcon from '../../static/navbar-svgs/email_icon.svg';
import emailHover from '../../static/hover-svgs/email_hover.svg';
import resumeIcon from '../../static/navbar-svgs/resume_icon.svg';
import resumeHover from '../../static/hover-svgs/resume_hover.svg';

import backArrow from '../../static/back_arrow.svg';

export default function NavBar(props) {
  const [dribbble, setDribbble] = useState(dribbbleIcon)
  const [linkedin, setLinkedin] = useState(linkedinIcon)
  const [email, setEmail] = useState(emailIcon)
  const [resume, setResume] = useState(resumeIcon)

  // const hoverHandler = (regImg, hoverImg) => {
  //   onMouseEnter
  // }
  return (
    <div className="navbar">
      {props.landing ? (
        <span className="underline navbar-text">Nick Richardson</span>
      ) : (
        <Link 
          to="/"
          style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'row',
            textDecoration: 'none'
          }}              
        >
          <img style={{
            height: '48px', 
            width: '48px', 
            }} src={backArrow} alt="Back arrow" 
          />
          <div className="navbar-text">All Projects</div>
        </Link>
      )}
      <div className={props.landing ? "navbar-items-container" : "navbar-items-container no-display"}>
        <div className="navbar-items">
          <img 
            className="dribbble" 
            src={dribbble} 
            alt="Dribbble" 
            onMouseOver={() => setDribbble(dribbbleHover)} 
            onMouseOut={() => setDribbble(dribbbleIcon)} 
          />
        </div>
        <div className="navbar-items">
          <img 
            className="linkedin" 
            src={linkedin} 
            alt="LinkedIn"
            onMouseEnter={() => setLinkedin(linkedinHover)} 
            onMouseLeave={() => setLinkedin(linkedinIcon)} 
          />
        </div>
        <div className="navbar-items">
          <img 
            className="email" 
            src={email} 
            alt="Email"
            onMouseEnter={() => setEmail(emailHover)} 
            onMouseLeave={() => setEmail(emailIcon)}
          />
        </div>
        <div className="navbar-items">
          <img 
            className="resume" 
            src={resume} 
            alt="CV" 
            onMouseEnter={() => setResume(resumeHover)} 
            onMouseLeave={() => setResume(resumeIcon)}
          />
        </div>
      </div>
    </div>
  )
}
