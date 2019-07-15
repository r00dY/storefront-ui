import React from "react";

import Device from "storefront-ui/Device";
import { R } from "storefront-ui/Config";

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
