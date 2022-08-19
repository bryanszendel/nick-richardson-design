import React, { useState } from "react";

import "../styles/global.scss";
import "../styles/landing.scss";

export default function SideNav(props) {
  return (
    <div className="side-nav">
      <div title="Intro" className="side-nav-item orange"></div>
      <div title="Projects" className="side-nav-item yellow"></div>
      <div title="Toolbox" className="side-nav-item pink"></div>
      <div title="Say Hi :)" className="side-nav-item green"></div>
    </div>
  );
}
