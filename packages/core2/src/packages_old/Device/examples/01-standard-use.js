import React from "react";

import Device from "@commerce-ui/core/Device";

export default () => {
  return (
    <div>
      <Device mobile>
        <p>mobile paragraph</p>
      </Device>

      <Device desktop>
        <p>desktop paragraph</p>
      </Device>
    </div>
  );
};
