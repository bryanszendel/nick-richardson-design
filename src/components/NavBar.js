import React from "react";

import '../styles/global.scss';
import '../styles/landing.scss';

import dribbbleIcon from '../../static/navbar-svgs/dribbble_icon.svg';
import linkedinIcon from '../../static/navbar-svgs/linkedin_icon.svg';
import emailIcon from '../../static/navbar-svgs/email_icon.svg';
import cvIcon from '../../static/navbar-svgs/cv_icon.svg';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-text underline">Nick Richardson</div>
      <div className="navbar-items-container">
        <img className="navbar-items" src={dribbbleIcon} alt="Dribbble" />
        <img className="navbar-items" src={linkedinIcon} alt="LinkedIn" />
        <img className="navbar-items" src={emailIcon} alt="Email" />
        <img className="navbar-items" src={cvIcon} alt="CV" />
      </div>
    </div>
  )
}
