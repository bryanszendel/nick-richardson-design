import React, { useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "../styles/global.scss";
import "../styles/landing.scss";

export default function SideNav(props) {
  return (
    <div className="side-nav">
      <AnchorLink
        to="#intro-anchor"
        title="Intro"
        className="side-nav-item-container"
      >
        <div className="side-nav-item orange"></div>
        <div className="side-nav-label orange-text">Intro</div>
      </AnchorLink>
      <AnchorLink
        to="#projects-anchor"
        title="Projects"
        className="side-nav-item-container"
      >
        <div className="side-nav-item yellow"></div>
        <div className="side-nav-label yellow-text">Projects</div>
      </AnchorLink>
      <AnchorLink
        to="#toolbox-anchor"
        title="Toolbox"
        className="side-nav-item-container"
      >
        <div className="side-nav-item pink"></div>
        <div className="side-nav-label pink-text">Toolbox</div>
      </AnchorLink>
      <AnchorLink
        to="#contact-anchor"
        title="Say Hi :)"
        className="side-nav-item-container"
      >
        <div className="side-nav-item green"></div>
        <div className="side-nav-label green-text">{`Say Hi :)`}</div>
      </AnchorLink>
    </div>
  );
}
