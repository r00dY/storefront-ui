import React, { useState } from "react";

import RadioGroup2 from "./RadioGroup2";

function StatefulRadioGroup2(props) {
  const [val, setVal] = useState(props.initialValue);

  const { value, onChange, ...restProps } = props;

  return (
    <RadioGroup2
      {...restProps}
      value={val}
      onChange={(val, e) => {
        setVal(val);
        onChange(val, e);
      }}
    />
  );
}

StatefulRadioGroup2.defaultProps = {
  initialValue: null,
  onChange: () => {}
};

export default StatefulRadioGroup2;
