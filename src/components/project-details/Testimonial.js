import React from "react";

import "../../styles/global.scss";
import "../../styles/project-pages.scss";

export default function Testimonial({ statement, author, color }) {
  return (
    <div className={`testimonial-container ${color || "green"}`}>
      <div className="testimonial-statement">“{statement}“</div>
      <div className="testimonial-author">— {author}</div>
    </div>
  );
}
