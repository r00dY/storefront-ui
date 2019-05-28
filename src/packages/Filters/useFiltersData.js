import React, { useState } from "react";

const useFiltersData = initData => {
  let [data, setData] = useState(initData);

  data.forEach(entry => {
    if (!entry.value) {
      if (entry.type === "select") {
        entry.value = [];
      }
    }
  });

  const onChange = (filterId, value) => {
    let dataNew = [...data];

    dataNew.forEach(entry => {
      if (entry.id === filterId) {
        entry.value = value;
      }
    });

    setData(dataNew);
  };

  return [data, onChange];
};

export default useFiltersData;
