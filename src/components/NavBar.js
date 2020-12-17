import React, { useState } from "react";
import { Link } from "gatsby";

import "../styles/global.scss";
import "../styles/landing.scss";
import "../styles/navbar.scss";

import dribbbleIcon from "../img/navbar-svgs/dribbble_icon.svg";
import dribbbleHover from "../img/hover-svgs/dribbble_hover.svg";
import linkedinIcon from "../img/navbar-svgs/linkedin_icon.svg";
import linkedinHover from "../img/hover-svgs/linkedin_hover.svg";
import emailIcon from "../img/navbar-svgs/email_icon.svg";
import emailHover from "../img/hover-svgs/email_hover.svg";
import resumeIcon from "../img/navbar-svgs/resume_icon.svg";
import resumeHover from "../img/hover-svgs/resume_hover.svg";

import backArrow from "../img/back_arrow.svg";

export default function NavBar(props) {
  // const [navHoverState, setNavHoverState] = useState()
  const [dribbble, setDribbble] = useState(dribbbleIcon);
  const [linkedin, setLinkedin] = useState(linkedinIcon);
  const [email, setEmail] = useState(emailIcon);
  const [resume, setResume] = useState(resumeIcon);

  const handleMouseOver = (hoverState) => {
    if (props.viewportWidth < 768) return;

    props.landing && props.setHoverState(hoverState);

    hoverState === "dribbble" && setDribbble(dribbbleHover);
    hoverState === "linkedin" && setLinkedin(linkedinHover);
    hoverState === "email" && setEmail(emailHover);
    hoverState === "resume" && setResume(resumeHover);
  };

  const handleMouseOut = (hoverState) => {
    props.landing && props.setHoverState(null);

    hoverState === "dribbble" && setDribbble(dribbbleIcon);
    hoverState === "linkedin" && setLinkedin(linkedinIcon);
    hoverState === "email" && setEmail(emailIcon);
    hoverState === "resume" && setResume(resumeIcon);
  };

  return (
    <div className="navbar">
      {props.landing ? (
        <span
          className="underline navbar-text"
          onMouseOver={() => props.setHoverState("nick")}
          onMouseOut={() => props.setHoverState(null)}
        >
          Nick Richardson
        </span>
      ) : (
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            textDecoration: "none",
          }}
        >
          <img
            style={{
              height: "48px",
              width: "48px",
            }}
            src={backArrow}
            alt="Back arrow"
          />
          <div className="navbar-text">All Projects</div>
        </Link>
      )}
      <div
        className={
          props.landing
            ? "navbar-items-container"
            : "navbar-items-container no-display"
        }
      >
        <div className="navbar-items">
          <img
            className="dribbble"
            src={dribbble}
            alt="Dribbble"
            onMouseOver={() => handleMouseOver("dribbble")}
            onMouseOut={() => handleMouseOut("dribbble")}
          />
        </div>
        <div className="navbar-items">
          <img
            className="linkedin"
            src={linkedin}
            alt="LinkedIn"
            onMouseOver={() => handleMouseOver("linkedin")}
            onMouseOut={() => handleMouseOut("linkedin")}
          />
        </div>
        <div className="navbar-items">
          <img
            className="email"
            src={email}
            alt="Email"
            onMouseOver={() => handleMouseOver("email")}
            onMouseOut={() => handleMouseOut("email")}
          />
        </div>
        <div className="navbar-items">
          <img
            className="resume"
            src={resume}
            alt="CV"
            onMouseOver={() => handleMouseOver("resume")}
            onMouseOut={() => handleMouseOut("resume")}
          />
        </div>
      </div>
    </div>
  );
}
