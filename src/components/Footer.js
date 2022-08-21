import React, { useState } from "react";

import "../styles/global.scss";
import "../styles/footer.scss";

import landingArrowUp from "../img/ArrowUp.svg";
import upArrow from "../img/down_arrow.svg";
import upArrowHover from "../img/up_arrow_hover.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Footer(props) {
  const [hoverState, setHoverState] = useState(upArrow);

  const copyEmail = "nickrichardsondesign@gmail.com";

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
    <>
      {props.landing && (
        <div className="landing-footer">
          <div
            className="email-footer"
            onClick={() => {
              navigator.clipboard.writeText(copyEmail);
              props.setDisplayToast(true);
              setTimeout(() => {
                props.setDisplayToast(false);
              }, 3000);
            }}
          >
            NickRichardsonDesign@gmail.com
          </div>
          <AnchorLink to="#top">
            <img
              className="arrow-footer-landing"
              src={landingArrowUp}
              alt="up arrow"
            />
          </AnchorLink>
        </div>
      )}
      {!props.landing && (
        <div className="footer">
          {props.appStore && !props.landing && (
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
      )}
    </>
  );
}
