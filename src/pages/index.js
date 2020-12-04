import React from "react";
import 'normalize.css';
import '../styles/global.scss';
import '../styles/landing.scss';

import NavBar from '../components/NavBar';

import downArrow from '../../static/down_arrow.svg';

export default function Home() {
  return (
    <div className="landing-container">
      <NavBar />
      <div className="hello-container">
        <div className="hello-text">
          Hello!
        </div>
      </div>
      <div className="description-container">
        <p className="description-text">
          I am currently a Product Designer at <span className="underline">Pushpay</span> with seven years SaaS experience and a BFA in Visual Design. A lover of <span className="underline">climbing</span> and <span className="underline">cacti</span>, passionate about solving painfully difficult problems and improving customer experiences.
        </p>
      </div>
      <div className="work-container">
        <div className="title-arrow-container">
          <div className="work-title">My Work</div>
          <img src={downArrow} alt="Down arrow"/>
        </div>
        <div className="work-items">Event Check-In</div>
        <div className="work-items">Financial Management</div>
        <div className="work-items">Volunteer Scheduling</div>
        <div className="work-items">CRM Mobile App</div>
        <div className="work-items">Customer Onboarding</div>
        <div className="work-items">Graphic Design</div>
      </div>
      <div className="footer"></div>
    </div>
  )
}
