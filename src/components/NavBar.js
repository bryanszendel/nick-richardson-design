import React, { useState } from "react";

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
import mediumIcon from "../img/navbar-svgs/medium_icon.svg";
import mediumHover from "../img/hover-svgs/medium_hover.svg";

import resumeFull from "../img/CV_NickRichardson.pdf";
import backArrow from "../img/back_arrow.svg";

export default function NavBar(props) {
  // const [navHoverState, setNavHoverState] = useState()
  const [dribbble, setDribbble] = useState(dribbbleIcon);
  const [linkedin, setLinkedin] = useState(linkedinIcon);
  const [email, setEmail] = useState(emailIcon);
  const [resume, setResume] = useState(resumeIcon);
  const [medium, setMedium] = useState(mediumIcon);

  const copyEmail = "nickrichardsondesign@gmail.com";

  const handleMouseOver = (hoverState) => {
    if (props.viewportWidth < 768) return;

    props.landing && props.setHoverState(hoverState);

    hoverState === "dribbble" && setDribbble(dribbbleHover);
    hoverState === "linkedin" && setLinkedin(linkedinHover);
    hoverState === "email" && setEmail(emailHover);
    hoverState === "resume" && setResume(resumeHover);
    hoverState === "medium" && setMedium(mediumHover);
  };

  const handleMouseOut = (hoverState) => {
    props.landing && props.setHoverState(null);

    hoverState === "dribbble" && setDribbble(dribbbleIcon);
    hoverState === "linkedin" && setLinkedin(linkedinIcon);
    hoverState === "email" && setEmail(emailIcon);
    hoverState === "resume" && setResume(resumeIcon);
    hoverState === "medium" && setMedium(mediumIcon);
  };

  const openResume = () => {
    window.open(resumeFull);
  };

  return (
    <div className="navbar">
      {/* {props.landing ? (
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
      )} */}
      <div
        className={
          props.landing
            ? "navbar-items-container"
            : "navbar-items-container no-display"
        }
      >
        {/* CV */}
        <div
          className="navbar-items"
          target="_blank"
          onMouseOver={() => handleMouseOver("resume")}
          onMouseOut={() => handleMouseOut("resume")}
        >
          <img className="resume" src={resume} alt="CV" />
        </div>

        {/* DRIBBBLE */}
        <div
          className="navbar-items"
          onMouseOver={() => handleMouseOver("dribbble")}
          onMouseOut={() => handleMouseOut("dribbble")}
        >
          <a href="https://dribbble.com/nr-design" target="_blank">
            <img className="dribbble" src={dribbble} alt="Dribbble" />
          </a>
        </div>

        {/* LINKEDIN */}
        <div
          className="navbar-items"
          onMouseOver={() => handleMouseOver("linkedin")}
          onMouseOut={() => handleMouseOut("linkedin")}
        >
          <a href="https://www.linkedin.com/in/nr-design/" target="_blank">
            <img className="linkedin" src={linkedin} alt="LinkedIn" />
          </a>
        </div>

        {/* MEDIUM */}
        <div
          className="navbar-items"
          onMouseOver={() => handleMouseOver("medium")}
          onMouseOut={() => handleMouseOut("medium")}
        >
          <a href="https://medium.com/@Nick_Richardson" target="_blank">
            <img className="medium" src={medium} alt="Medium" />
          </a>
        </div>

        {/* EMAIL */}
        <div
          id="copy-email"
          className="navbar-items"
          onClick={() => {
            navigator.clipboard.writeText(copyEmail);
            props.setDisplayToast(true);
            setTimeout(() => {
              props.setDisplayToast(false);
            }, 3000);
          }}
          onMouseOver={() => handleMouseOver("email")}
          onMouseOut={() => handleMouseOut("email")}
        >
          <img className="email" src={email} alt="Email" />
        </div>
      </div>
      {/* <div className={displayToast ? "toast-message show" : "toast-message"}>
        Email Copied 👍
      </div> */}
    </div>
  );
}
