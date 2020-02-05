import React, { useState } from "react";

// options: value, label

function useRadioGroup(options) {
  const newOptions = options.map(option => ({
    ...option
    // selectableProps:
  }));
}

export { useRadioGroup };
