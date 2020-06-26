import React from "react";
import Layer from "../Layer";

function Dialog$(props) {
  return <Layer {...props} focusLock={true} />;
}

export default Dialog$;
