import React from "react";

import '../styles/global.scss';
import '../styles/footer.scss';

import upArrow from '../../static/down_arrow.svg';

export default function Footer(props) {

  const scrollTop = () => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }
  
  return (
    <div className="footer">
      <div className="footer-text">VIEW ON APP STORE</div>
      <div 
        onClick={scrollTop} 
        onKeyPress={scrollTop}
        role="button" 
        tabIndex="0" 
      >
        <img src={upArrow} alt="Up arrow" className="up-arrow" />
      </div>
    </div>
  )
}