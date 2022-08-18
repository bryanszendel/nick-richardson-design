import React from "react";

import "../../styles/global.scss";

export default function Testimonial(props) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "692px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "120px",
        marginBottom: props.marginBottom,
      }}
    >
      <div
        style={{
          fontFamily: "RobotoMono",
          textAlign: "center",
          fontSize: "30px",
          color: "#03B770",
          lineHeight: "48px",
          paddingRight: "20px",
          paddingLeft: "20px",
        }}
      >
        “{props.statement}“
      </div>
      <div
        style={{
          fontFamily: "RobotoMono",
          color: "#03B770",
          fontSize: "24px",
          lineHeight: "40px",
          marginTop: "20px",
        }}
      >
        — {props.author}
      </div>
    </div>
  );
}
