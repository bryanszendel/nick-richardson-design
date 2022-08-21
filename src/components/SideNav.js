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
      </AnchorLink>
      <AnchorLink
        to="#projects-anchor"
        title="Projects"
        className="side-nav-item-container"
      >
        <div className="side-nav-item yellow"></div>
      </AnchorLink>
      <AnchorLink
        to="#toolbox-anchor"
        title="Toolbox"
        className="side-nav-item-container"
      >
        <div className="side-nav-item pink"></div>
      </AnchorLink>
      <AnchorLink
        to="#contact-anchor"
        title="Say Hi :)"
        className="side-nav-item-container"
      >
        <div className="side-nav-item green"></div>
      </AnchorLink>
    </div>
  );
}
