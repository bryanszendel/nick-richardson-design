import React, { useState } from "react";

import "../styles/global.scss";
import "../styles/landing.scss";

export default function Project({ switchDir, title, imgSrc, imgAlt }) {
  return (
    <div className={switchDir ? "work-items switch-dir" : "work-items"}>
      <img className="project-img" src={imgSrc} alt={imgAlt} />
      <div className="project-title-container">
        <div
          className={
            switchDir ? "project-title switch-title-dir" : "project-title"
          }
        >
          {title}
        </div>
      </div>
    </div>
  );
}
