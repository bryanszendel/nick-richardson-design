import { Link } from "gatsby";
import React from "react";

import "../styles/global.scss";
import "../styles/landing.scss";

export default function Project({
  switchDir,
  title,
  imgSrc,
  imgAlt,
  linkTo,
  comingSoon,
}) {
  // const getLinkClassNames = () => {
  //   let base = "work-items";
  //   if (switchDir) base += " switch-dir";
  //   if (comingSoon) base += " no-hover";
  //   return base;
  // };
  return (
    <Link
      to={comingSoon ? undefined : "/" + linkTo}
      className={switchDir ? "work-items switch-dir" : "work-items"}
    >
      <img
        className={comingSoon ? "project-img no-hover" : "project-img"}
        src={imgSrc}
        alt={imgAlt}
      />
      <div to={"/" + linkTo} className="project-title-container">
        <div
          id={linkTo}
          className={
            switchDir ? "project-title switch-title-dir" : "project-title"
          }
        >
          {title}
          {comingSoon && <h4 className="subtitle">Coming Soon</h4>}
        </div>
      </div>
    </Link>
  );
}
