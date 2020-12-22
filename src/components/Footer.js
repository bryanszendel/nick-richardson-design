import React, { useState } from "react";

import "../styles/global.scss";
import "../styles/footer.scss";

import upArrow from "../img/down_arrow.svg";
import upArrowHover from "../img/up_arrow_hover.svg";

export default function Footer(props) {
  const [hoverState, setHoverState] = useState(upArrow);
  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleMouseOver = () => {
    setHoverState(upArrowHover);
  };
  const handleMouseOut = () => {
    setHoverState(upArrow);
  };
  return (
    <div className="footer">
      {props.appStore && (
        <a href={props.storeUrl} className="footer-text" target="_blank">
          VIEW ON APP STORE
        </a>
      )}
      <div
        onClick={scrollTop}
        onKeyPress={scrollTop}
        role="button"
        tabIndex="0"
      >
        <img
          src={hoverState}
          alt="Up arrow"
          className={hoverState === upArrow ? "up-arrow" : "up-arrow-hover"}
          onMouseOver={() => handleMouseOver()}
          onMouseOut={() => handleMouseOut()}
        />
      </div>
    </div>
  );
}
