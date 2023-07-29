import { Link } from "gatsby";
import React from "react";

import "../styles/global.scss";
import "../styles/landing.scss";

export default function Project({
  id,
  switchDir,
  title,
  imgSrc,
  imgAlt,
  linkTo,
  comingSoon,
  external,
}) {
  const generateLink = (linkTo, comingSoon, external) => {
    if (external) {
      return linkTo;
    } else {
      return comingSoon ? `` : `/${linkTo}`;
    }
  };
  return (
    <Link
      to={generateLink(linkTo, comingSoon, external)}
      className="work-items"
    >
      <div
        className={
          switchDir ? "project-container switch-dir" : "project-container"
        }
      >
        <div className="project-title-container">
          <div
            id={id || linkTo}
            className={
              switchDir ? "project-title switch-title-dir" : "project-title"
            }
          >
            {title}
            {comingSoon && <h4 className="subtitle">Coming Soon</h4>}
          </div>
        </div>
        <div className="project-img-container">
          <img
            className={comingSoon ? "project-img no-hover" : "project-img"}
            src={imgSrc}
            alt={imgAlt}
          />
        </div>
      </div>
    </Link>
  );
}
