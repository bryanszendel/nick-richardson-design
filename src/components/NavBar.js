import React from "react";
import { Link } from 'gatsby';

import '../styles/global.scss';
import '../styles/landing.scss';
import '../styles/navbar.scss';

import dribbbleIcon from '../../static/navbar-svgs/dribbble_icon.svg';
import linkedinIcon from '../../static/navbar-svgs/linkedin_icon.svg';
import emailIcon from '../../static/navbar-svgs/email_icon.svg';
import cvIcon from '../../static/navbar-svgs/cv_icon.svg';
import backArrow from '../../static/back_arrow.svg';

export default function NavBar(props) {

  return (
    <div className="navbar">
      {props.landing ? (
        <div className="navbar-text underline">Nick Richardson</div>
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
            // marginRight: '10px'
            }} src={backArrow} alt="Back arrow" 
          />
          <div className="navbar-text">All Projects</div>
        </Link>
      )}
      <div className="navbar-items-container no-display">
        <img className="navbar-items" src={dribbbleIcon} alt="Dribbble" />
        <img className="navbar-items" src={linkedinIcon} alt="LinkedIn" />
        <img className="navbar-items" src={emailIcon} alt="Email" />
        <img className="navbar-items" src={cvIcon} alt="CV" />
      </div>
    </div>
  )
}
