import { renderHook, act } from "@testing-library/react-hooks";
import { useState } from "react";

import useFilters from "./useFilters";

const filtersData = [
  {
    id: "sort",
    label: "Sort",
    type: "select",
    options: [
      {
        id: "price-asc",
        label: "Price (high to low)"
      },
      {
        id: "price-desc",
        label: "Price (low to high)"
      },
      {
        id: "newest",
        label: "Newest"
      },
      {
        id: "most-popular",
        label: "Most popular"
      }
    ]
  },
  {
    id: "brand",
    label: "Brand",
    type: "select",
    options: [
      {
        id: "nike",
        label: "Nike",
        amount: 46
      },
      {
        id: "adidas",
        label: "Adidas",
        amount: 21
      },
      {
        id: "puma",
        label: "Puma",
        amount: 12
      },
      {
        id: "under-armour",
        label: "Under Armour",
        amount: 0
      }
    ]
  },
  {
    id: "color",
    label: "Color",
    type: "select",
    options: [
      {
        id: "white",
        label: "white",
        amount: 46,
        data: {
          hex: "#ffffff"
        }
      },
      {
        id: "grey",
        label: "grey",
        amount: 21,
        data: {
          hex: "#E5E5E7"
        }
      },
      {
        id: "black",
        label: "black",
        amount: 12,
        data: {
          hex: "#000000"
        }
      },
      {
        id: "blue",
        label: "blue",
        amount: 0,
        data: {
          hex: "#295F9A"
        }
      },
      {
        id: 123, // number ID
        label: "orange",
        amount: 0,
        data: {
          hex: "#295F9A"
        }
      },
      {
        id: 124, // number ID
        label: "aqua",
        amount: 0,
        data: {
          hex: "#295F9A"
        }
      }
    ]
  },
  {
    id: "model",
    label: "Model",
    type: "select",
    options: ["vintage", "modern"]
  },
  {
    id: "size",
    label: "Size",
    type: "multiselect",
    options: [
      {
        id: "xs",
        label: "XS"
      },
      {
        id: "s",
        label: "S"
      },
      {
        id: "m",
        label: "M"
      },
      {
        id: "l",
        label: "L"
      },
      {
        id: "xl",
        label: "XL"
      }
    ]
  },
  {
    id: "price",
    label: "Price",
    type: "range",
    min: 10,
    max: 100
  }
];

// this wrapper mocks changing props for hook useFilters
function useFiltersWrapper(props) {
  const [data, setData] = useState(props.data);

  return {
    ...useFilters({
      ...props,
      data
    }),
    setData
  };
}

test("setting select values (standard + soft)", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useFilters({
      data: filtersData,
      onChange
    })
  );

  expect(result.current.filters[0].value).toBe(null);
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.filters[0].isDirty).toBe(false);
  expect(result.current.filters[1].isDirty).toBe(false);
  expect(result.current.filters[2].isDirty).toBe(false);
  expect(result.current.filters[3].isDirty).toBe(false);

  expect(result.current.isDirty).toBe(false);

  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue("sort", "price-asc"); // setValue as id
  });

  expect(result.current.filters[0].value.id).toBe("price-asc");
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.filters[0].isDirty).toBe(false);
  expect(result.current.filters[1].isDirty).toBe(false);
  expect(result.current.filters[2].isDirty).toBe(false);
  expect(result.current.filters[3].isDirty).toBe(false);

  expect(result.current.isDirty).toBe(false);

  expect(onChange.mock.calls.length).toBe(1);

  act(() => {
    result.current.setValue("sort", null); // setValue as null
  });

  expect(result.current.filters[0].value).toBe(null);
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.filters[0].isDirty).toBe(false);
  expect(result.current.filters[1].isDirty).toBe(false);
  expect(result.current.filters[2].isDirty).toBe(false);
  expect(result.current.filters[3].isDirty).toBe(false);

  expect(result.current.isDirty).toBe(false);

  expect(onChange.mock.calls.length).toBe(2);

  act(() => {
    result.current.setValue("sort", filtersData[0].options[1]); // setValue as object
  });

  expect(result.current.filters[0].value.id).toBe("price-desc");
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.filters[0].isDirty).toBe(false);
  expect(result.current.filters[1].isDirty).toBe(false);
  expect(result.current.filters[2].isDirty).toBe(false);
  expect(result.current.filters[3].isDirty).toBe(false);

  expect(result.current.isDirty).toBe(false);

  expect(onChange.mock.calls.length).toBe(3);

  act(() => {
    result.current.setValue("sort", null, true); // setValue softly (dirty flag goes true)
  });

  expect(result.current.filters[0].value).toBe(null);
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.filters[0].isDirty).toBe(true);
  expect(result.current.filters[1].isDirty).toBe(false);
  expect(result.current.filters[2].isDirty).toBe(false);
  expect(result.current.filters[3].isDirty).toBe(false);

  expect(result.current.isDirty).toBe(true);

  expect(onChange.mock.calls.length).toBe(3);

  act(() => {
    result.current.setValue("sort", "price-desc", true); // return softly to previous value (dirty will become false).
  });

  expect(result.current.filters[0].value.id).toBe("price-desc");
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.filters[0].isDirty).toBe(false);
  expect(result.current.filters[1].isDirty).toBe(false);
  expect(result.current.filters[2].isDirty).toBe(false);
  expect(result.current.filters[3].isDirty).toBe(false);

  expect(result.current.isDirty).toBe(false);

  expect(onChange.mock.calls.length).toBe(3);

  act(() => {
    result.current.setValue("sort", null, true); // again setValue softly
  });

  expect(result.current.filters[0].value).toBe(null);
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.filters[0].isDirty).toBe(true);
  expect(result.current.filters[1].isDirty).toBe(false);
  expect(result.current.filters[2].isDirty).toBe(false);
  expect(result.current.filters[3].isDirty).toBe(false);

  expect(result.current.isDirty).toBe(true);
  expect(onChange.mock.calls.length).toBe(3);

  act(() => {
    result.current.commit(); // commit
  });

  expect(result.current.filters[0].value).toBe(null);
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.isDirty).toBe(false);

  expect(result.current.filters[0].isDirty).toBe(false);
  expect(result.current.filters[1].isDirty).toBe(false);
  expect(result.current.filters[2].isDirty).toBe(false);
  expect(result.current.filters[3].isDirty).toBe(false);

  expect(onChange.mock.calls.length).toBe(4);
});

test("[changing filters] changing filters values from props changes internal state", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useFiltersWrapper({
      data: filtersData,
      onChange
    })
  );

  act(() => {
    result.current.setValue("sort", "price-asc"); // setValue as id
    result.current.setValue("color", "white"); // setValue as id
  });

  expect(result.current.filters[0].value.id).toBe("price-asc");
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value.id).toBe("white");
  expect(result.current.filters[3].value).toBe(null);

  expect(onChange.mock.calls.length).toBe(2);

  act(() => {
    result.current.setData(
      filtersData.map(filter => ({
        ...filter,
        value: filter.id === "color" ? "black" : filter.value
      }))
    ); // external color value changed to black.
  });

  expect(result.current.filters[0].value.id).toBe("price-asc");
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value.id).toBe("black");
  expect(result.current.filters[3].value).toBe(null);

  expect(onChange.mock.calls.length).toBe(2);
});

test("[changing filters] removing other filters from list doesn't affect existing filters state", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useFiltersWrapper({
      data: filtersData,
      onChange
    })
  );

  act(() => {
    result.current.setValue("sort", "price-asc"); // setValue as id
    result.current.setValue("color", "white"); // setValue as id
  });

  expect(result.current.filters[0].value.id).toBe("price-asc");
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value.id).toBe("white");
  expect(result.current.filters[3].value).toBe(null);

  expect(onChange.mock.calls.length).toBe(2);

  act(() => {
    result.current.setData([filtersData[0], filtersData[2]]); // let's remove unset filters
  });

  expect(result.current.filters.length).toBe(2);
  expect(result.current.filters[0].value.id).toBe("price-asc");
  expect(result.current.filters[1].value.id).toBe("white");

  expect(onChange.mock.calls.length).toBe(2);
});

test("[changing filters] removing filter with local value from list, and bringing it back -> state shouldn't be preserved", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useFiltersWrapper({
      data: filtersData,
      onChange
    })
  );

  act(() => {
    result.current.setValue("sort", "price-asc"); // setValue as id
    result.current.setValue("color", "white"); // setValue as id
  });

  expect(result.current.filters[0].value.id).toBe("price-asc");
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value.id).toBe("white");
  expect(result.current.filters[3].value).toBe(null);

  expect(onChange.mock.calls.length).toBe(2);

  act(() => {
    result.current.setData([filtersData[0]]); // let's remove all filters except for sort
  });

  expect(result.current.filters.length).toBe(1);
  expect(result.current.filters[0].value.id).toBe("price-asc");

  expect(onChange.mock.calls.length).toBe(2);

  act(() => {
    result.current.setData(filtersData); // let's bring back old filters
  });

  expect(result.current.filters.length).toBe(6);
  expect(result.current.filters[0].value.id).toBe("price-asc");
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null); // COLOR WAS REMOVED SO STATE SHOULDN'T BE KEPT HERE
  expect(result.current.filters[3].value).toBe(null);

  expect(onChange.mock.calls.length).toBe(2);
});

test("clearAll and isEmpty work", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useFiltersWrapper({
      data: filtersData,
      onChange
    })
  );

  act(() => {
    result.current.setValue("sort", "price-asc"); // setValue as id
    result.current.setValue("color", "white"); // setValue as id
  });

  expect(onChange.mock.calls.length).toBe(2);

  expect(result.current.filters[0].isEmpty).toBe(false);
  expect(result.current.filters[1].isEmpty).toBe(true);
  expect(result.current.filters[2].isEmpty).toBe(false);
  expect(result.current.filters[3].isEmpty).toBe(true);

  act(() => {
    result.current.clearAll();
  });

  expect(onChange.mock.calls.length).toBe(3);

  expect(result.current.filters[0].isEmpty).toBe(true);
  expect(result.current.filters[1].isEmpty).toBe(true);
  expect(result.current.filters[2].isEmpty).toBe(true);
  expect(result.current.filters[3].isEmpty).toBe(true);
});

test("initial values work", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useFiltersWrapper({
      data: filtersData.map(x => {
        if (x.id === "sort") {
          return {
            ...x,
            value: "price-asc"
          };
        } else if (x.id === "color") {
          return {
            ...x,
            value: "grey"
          };
        }
        return x;
      }),
      onChange
    })
  );

  expect(result.current.filters[0].isEmpty).toBe(false);
  expect(result.current.filters[1].isEmpty).toBe(true);
  expect(result.current.filters[2].isEmpty).toBe(false);
  expect(result.current.filters[3].isEmpty).toBe(true);
});

test("number IDs work", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useFiltersWrapper({
      data: filtersData,
      onChange
    })
  );

  act(() => {
    result.current.setValue("color", 123); // setValue as id
  });

  expect(result.current.filters[0].isEmpty).toBe(true);
  expect(result.current.filters[1].isEmpty).toBe(true);
  expect(result.current.filters[2].value.label).toBe("orange");
  expect(result.current.filters[3].isEmpty).toBe(true);

  act(() => {
    result.current.setValue("color", "124"); // setValue as id
  });

  expect(result.current.filters[0].isEmpty).toBe(true);
  expect(result.current.filters[1].isEmpty).toBe(true);
  expect(result.current.filters[2].value.label).toBe("aqua");
  expect(result.current.filters[3].isEmpty).toBe(true);
});

test("if filter is empty its value is always null no matter of type (not [] for multiselect, nor { min, max } for range picker etc)", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useFilters({
      data: filtersData,
      onChange
    })
  );

  act(() => {
    result.current.setValue("size", ["l", "xl"]);
    result.current.setValue("price", { from: 50, to: 60 });
  });

  expect(onChange.mock.calls.length).toBe(2);

  expect(result.current.filters[0].value).toBe(null);
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);
  expect(result.current.filters[4].value[0].id).toBe("l");
  expect(result.current.filters[4].value[1].id).toBe("xl");
  expect(result.current.filters[5].value.from).toBe(50);
  expect(result.current.filters[5].value.to).toBe(60);

  act(() => {
    result.current.setValue("size", []);
    result.current.setValue("price", { from: 0, to: 120 });
  });

  expect(onChange.mock.calls.length).toBe(4);
  expect(onChange.mock.results[2].value[4].value).toBe(null);
  expect(onChange.mock.results[3].value[5].value).toBe(null);

  expect(result.current.filters[0].value).toBe(null);
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);
  expect(result.current.filters[4].value).toBe(null);
  expect(result.current.filters[5].value).toBe(null);
});

test("clearAll works with default values", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useFiltersWrapper({
      data: filtersData.map(x => {
        if (x.id === "sort") {
          return {
            ...x,
            value: "price-asc"
          };
        } else if (x.id === "color") {
          return {
            ...x,
            value: "grey"
          };
        }
        return x;
      }),
      onChange
    })
  );

  act(() => {
    result.current.setValue("sort", "price-desc"); // setValue as id
    result.current.setValue("color", "white"); // setValue as id
  });

  act(() => {
    result.current.clearAll();
  });

  expect(onChange.mock.calls.length).toBe(3);

  expect(result.current.filters[0].isEmpty).toBe(true);
  expect(result.current.filters[1].isEmpty).toBe(true);
  expect(result.current.filters[2].isEmpty).toBe(true);
  expect(result.current.filters[3].isEmpty).toBe(true);
});
