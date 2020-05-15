import React, { useState } from "react";

function useFilters({ data, onChange }) {
  data = data[0];

  const [value, setValue_] = useState(data.value || null); // internal data value

  const setValue = newValue => {
    setValue_(newValue);

    if (onChange) {
      onChange();
    }
  };

  const selectProps = {
    options: data.options,
    allowEmpty: true,
    value,
    onChange: setValue
  };

  return {
    selectProps,
    clear: () => {
      setValue(null);
    }
  };
}

export default useFilters;
