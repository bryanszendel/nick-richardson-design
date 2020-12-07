import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import 'normalize.css';
import '../styles/landing.scss';
import '../styles/global.scss';

import NavBar from '../components/NavBar';

import downArrow from '../../static/down_arrow.svg';

export default function Home() {

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
        <NavBar landing={true} />
        <div className="hello-container">
          <div className="hello-text">
            Hello!
          </div>
        </div>

        <div className="description-container">
          <div className="description">
            I am currently a Product Designer at <span className="underline">Pushpay</span> with seven years SaaS experience and a BFA in Visual Design. A lover of <span className="underline">climbing</span> and <span className="underline">cacti</span>, passionate about solving painfully difficult problems and improving customer experiences.
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
