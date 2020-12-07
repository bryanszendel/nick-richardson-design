import React from "react";

import '../styles/global.scss';
import '../styles/footer.scss';

import upArrow from '../../static/down_arrow.svg';

export default function Footer(props) {

  return (
    <div className="footer">
      <div className="footer-text">VIEW ON APP STORE</div>
      <img src={upArrow} alt="Up arrow" className="up-arrow" />
    </div>
  )
}
