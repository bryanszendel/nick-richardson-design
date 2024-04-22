import React, { useState } from "react";

import "../styles/global.scss";
import "../styles/landing.scss";
import "../styles/navbar.scss";

import dribbbleIcon from "../img/navbar-svgs/dribbble_icon.svg";
import dribbbleIconAlt from "../img/navbar-svgs/dribbble_icon_alt.svg";
import dribbbleHover from "../img/hover-svgs/dribbble_hover.svg";
import linkedinIcon from "../img/navbar-svgs/linkedin_icon.svg";
import linkedinIconAlt from "../img/navbar-svgs/linkedin_icon_alt.svg";
import linkedinHover from "../img/hover-svgs/linkedin_hover.svg";
import emailIcon from "../img/navbar-svgs/email_icon.svg";
import emailIconAlt from "../img/navbar-svgs/email_icon_alt.svg";
import emailHover from "../img/hover-svgs/email_hover.svg";
import resumeIcon from "../img/navbar-svgs/resume_icon.svg";
import resumeIconAlt from "../img/navbar-svgs/resume_icon_alt.svg";
import resumeHover from "../img/hover-svgs/resume_hover.svg";
import mediumIcon from "../img/navbar-svgs/medium_icon.svg";
import mediumIconAlt from "../img/navbar-svgs/medium_icon_alt.svg";
import mediumHover from "../img/hover-svgs/medium_hover.svg";

import resumeFull from "../img/NR-CV-2024.pdf";
import backArrow from "../img/back_arrow.svg";
import { Link } from "gatsby";

export default function NavBar(props) {
  const [dribbble, setDribbble] = useState(
    props.landing ? dribbbleIcon : dribbbleIconAlt
  );
  const [linkedin, setLinkedin] = useState(
    props.landing ? linkedinIcon : linkedinIconAlt
  );
  const [email, setEmail] = useState(props.landing ? emailIcon : emailIconAlt);
  const [resume, setResume] = useState(
    props.landing ? resumeIcon : resumeIconAlt
  );
  const [medium, setMedium] = useState(
    props.landing ? mediumIcon : mediumIconAlt
  );

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

    hoverState === "dribbble" &&
      setDribbble(props.landing ? dribbbleIcon : dribbbleIconAlt);
    hoverState === "linkedin" &&
      setLinkedin(props.landing ? linkedinIcon : linkedinIconAlt);
    hoverState === "email" &&
      setEmail(props.landing ? emailIcon : emailIconAlt);
    hoverState === "resume" &&
      setResume(props.landing ? resumeIcon : resumeIconAlt);
    hoverState === "medium" &&
      setMedium(props.landing ? mediumIcon : mediumIconAlt);
  };

  const openResume = () => {
    window.open(resumeFull);
  };

  return (
    <div className={props.landing ? "navbar" : "navbar reverse"}>
      <div
        className={
          props.landing
            ? "navbar-items-container"
            : "navbar-items-container no-display"
        }
      >
        {/* CV */}
        <a
          className="navbar-items"
          target="_blank"
          rel="noreferrer noopener"
          onClick={openResume}
          onMouseOver={() => handleMouseOver("resume")}
          onMouseOut={() => handleMouseOut("resume")}
        >
          <img src={resume} alt="CV" />
        </a>

        {/* DRIBBBLE */}
        <a
          className="navbar-items"
          onMouseOver={() => handleMouseOver("dribbble")}
          onMouseOut={() => handleMouseOut("dribbble")}
        >
          <a
            href="https://dribbble.com/nr-design"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={dribbble} alt="Dribbble" />
          </a>
        </a>

        {/* LINKEDIN */}
        <div
          className="navbar-items"
          onMouseOver={() => handleMouseOver("linkedin")}
          onMouseOut={() => handleMouseOut("linkedin")}
        >
          <a
            href="https://www.linkedin.com/in/nr-design/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>

        {/* MEDIUM */}
        <div
          className="navbar-items"
          onMouseOver={() => handleMouseOver("medium")}
          onMouseOut={() => handleMouseOut("medium")}
        >
          <a
            href="https://medium.com/@Nick_Richardson"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={medium} alt="Medium" />
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
          <img src={email} alt="Email" />
        </div>
      </div>{" "}
      {!props.landing && (
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
              height: "24px",
              width: "24px",
            }}
            src={backArrow}
            alt="Back arrow"
          />
          <div className="navbar-text">Back</div>
        </Link>
      )}
    </div>
  );
}
