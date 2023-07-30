import React from "react";

import "../../styles/global.scss";
import "../../styles/detail-pages.scss";

export default function Testimonial({ statement, author }) {
  return (
    <div className="testimonial-container">
      <div className="testimonial-statement">“{statement}“</div>
      <div className="testimonial-author">— {author}</div>
    </div>
  );
}
