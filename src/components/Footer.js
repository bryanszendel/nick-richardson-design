import React, { useState } from "react";
import { globalHistory } from "@reach/router";

import "../styles/global.scss";
import "../styles/footer.scss";

import landingArrowUp from "../img/ArrowUp.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Footer(props) {
  const [displayToast, setDisplayToast] = useState(false);
  const copyEmail = "nickrichardsondesign@gmail.com";
  const path = globalHistory.location.pathname;

  return (
    <>
      <div className="colors-container">
        <div className="color-divider blue"></div>
        <div className="color-divider orange"></div>
        <div className="color-divider yellow"></div>
        <div className="color-divider pink"></div>
        <div className="color-divider green"></div>
      </div>
      <div className="footer-container">
        <div id="contact-anchor"></div>
        <div className="landing-footer">
          <div
            className="email-footer"
            onClick={() => {
              navigator.clipboard.writeText(copyEmail);
              setDisplayToast(true);
              setTimeout(() => {
                setDisplayToast(false);
              }, 3000);
            }}
          >
            NickRichardsonDesign@gmail.com
          </div>
          <AnchorLink to={`${path}#top`}>
            <img
              className="arrow-footer-landing"
              src={landingArrowUp}
              alt="up arrow"
            />
          </AnchorLink>
        </div>
      </div>
      <div className={displayToast ? "toast-message show" : "toast-message"}>
        Email Copied 👍
      </div>
    </>
  );
}
