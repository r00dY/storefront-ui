import React from "react";

export default props => (
  <div
    style={{
      padding: "16px",
      backgroundColor: "lightgrey",
      color: props.color || "red"
    }}
  >
    <h1>test</h1>
  </div>
);
