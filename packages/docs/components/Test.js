import React from "react";

export default props => (
  <div
    style={{
      padding: "16px",
      backgroundColor: "lightgrey",
      color: props.color || "red"
    }}
  >
    Test
  </div>
);
