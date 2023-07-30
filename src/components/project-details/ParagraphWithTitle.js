import React from "react";

import "../../styles/global.scss";

export default function ParagraphWithTitle(props) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        fontSize: "30px",
        lineHeight: "30px",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          fontFamily: "RobotoMono",
          fontSize: "24px",
          fontWeight: 500,
          textAlign: "left",
          lineHeight: "42px",
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          whiteSpace: "pre-wrap",
          float: "left",
          textIndent: "0",
          fontFamily: "RobotoMono",
          fontWeight: 400,
          color: "#111111",
          fontSize: "16px",
          lineHeight: "42px",
          marginTop: "20px",
        }}
      >
        {props.paragraph}
      </div>
    </div>
  );
}
