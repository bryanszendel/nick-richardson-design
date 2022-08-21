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
        className="side-nav-item orange"
      >
        <span></span>
      </AnchorLink>
      <AnchorLink
        to="#projects-anchor"
        title="Projects"
        className="side-nav-item yellow"
      >
        <span></span>
      </AnchorLink>
      <AnchorLink
        to="#toolbox-anchor"
        title="Toolbox"
        className="side-nav-item pink"
      >
        <span></span>
      </AnchorLink>
      <AnchorLink
        to="#contact-anchor"
        title="Say Hi :)"
        className="side-nav-item green"
      >
        <span></span>
      </AnchorLink>
    </div>
  );
}
