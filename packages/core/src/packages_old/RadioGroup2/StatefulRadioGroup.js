import React, { useState } from "react";

import { RadioGroup, RadioGroupPanels } from "./RadioGroup";

function statefulWrapper(Component) {
  const statefulComponent = function StatefulRadioGroup2(props) {
    const [val, setVal] = useState(props.initialValue);

    const { value, onChange, ...restProps } = props;

    return (
      <Component
        {...restProps}
        value={val}
        onChange={(val, e) => {
          setVal(val);
          onChange(val, e);
        }}
      />
    );
  };

  statefulComponent.defaultProps = {
    initialValue: null,
    onChange: () => {}
  };

  return statefulComponent;
}

export const StatefulRadioGroup = statefulWrapper(RadioGroup);
export const StatefulRadioGroupPanels = statefulWrapper(RadioGroupPanels);
