import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import 'normalize.css';
import '../styles/landing.scss';
import '../styles/global.scss';

import NavBar from '../components/NavBar';

import nickImg from '../../static/hover-images/Headshots.png'
import dribbbleImg from '../../static/hover-images/Dribbble.png';
import linkedinImg from '../../static/hover-images/LinkedIn.png';
import emailImg from '../../static/hover-images/Email.png';
import resumeImg from '../../static/hover-images/Resume.png';
import pushpayImg from '../../static/hover-images/Pushpay.png';
import climbingImg from '../../static/hover-images/Climbing.png';
import cactiImg from '../../static/hover-images/Cacti.png';
import downArrow from '../../static/down_arrow.svg';

export default function Home() {
  
  const [hoverState, setHoverState] = useState(null)

  useEffect(() => {
    document.documentElement.style.setProperty('--bg', 'rgb(3, 183, 112)')
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portfolio of Nick Richardson</title>
      </Helmet>
      <div className="landing-container">
        <NavBar 
          landing={true} 
          hoverState={hoverState}
          setHoverState={setHoverState}
        />
        <div className="hello-container">
          <div className={hoverState === null ? "hello-text" : "no-display"}>
            Hello!
          </div>
          <div className={hoverState === 'nick' ? "hover-state" : "no-display"}>
            <img src={nickImg} alt="headshots" className="hover-img" />
          </div>
          <div className={hoverState === 'pushpay' ? "hover-state" : "no-display"}>
            <img src={pushpayImg} alt="pushpay preview" className="hover-img" />
          </div>
          <div className={hoverState === 'climbing' ? "hover-state" : "no-display"}>
            <img src={climbingImg} alt="climbers" className="hover-img" />
          </div>
          <div className={hoverState === 'cacti' ? "hover-state" : "no-display"}>
            <img src={cactiImg} alt="some cacti" className="hover-img" />
          </div>
          <div className={hoverState === 'dribbble' ? "hover-state" : "no-display"}>
            <img src={dribbbleImg} alt="dribbble preview" className="hover-img" />
          </div>
          <div className={hoverState === 'linkedin' ? "hover-state" : "no-display"}>
            <img src={linkedinImg} alt="linkedin preview" className="hover-img" />
          </div>
          <div className={hoverState === 'email' ? "hover-state" : "no-display"}>
            <img src={emailImg} alt="email preview" className="hover-img" />
          </div>
          <div className={hoverState === 'resume' ? "hover-state" : "no-display"}>
            <img src={resumeImg} alt="resume preview" className="hover-img" />
          </div>
        </div>

        <div className="description-container">
          <div className="description">
            <span>I am currently a Product Designer at </span>
            <span 
              className="underline" 
              onMouseOver={() => setHoverState('pushpay')}
              onMouseOut={() => setHoverState(null)}
            >Pushpay</span>
            <span> with seven years SaaS experience and a BFA in Visual Design. A lover of </span>
            <span 
              className="underline"
              onMouseOver={() => setHoverState('climbing')}
              onMouseOut={() => setHoverState(null)}
            >climbing</span> 
            <span> and </span>
            <span 
              className="underline"
              onMouseOver={() => setHoverState('cacti')}
              onMouseOut={() => setHoverState(null)}
            >cacti</span>
            <span>, passionate about solving painfully difficult problems and improving customer experiences.</span>
          </div>
        </div>

        <div className="work-container">
          <div className="title-arrow-container">
            <div className="work-title">My Work</div>
            <img id="arrow" src={downArrow} alt="Down arrow"/>
          </div>
          <div className="work-items-container">
            <div className="work-items">
              <Link to="/event-checkin" className="work-items-link" >Event Check-In</Link>
            </div>
            <div className="work-items">Financial Management</div>
            <div className="work-items">Volunteer Scheduling</div>
            <div className="work-items">CRM Mobile App</div>
            <div className="work-items">Customer Onboarding</div>
            <div className="work-items">Graphic Design</div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}
