import { renderHook, act } from "@testing-library/react-hooks";

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
    type: "multiselect",
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
      }
    ]
  },
  {
    id: "price",
    label: "Price",
    type: "range",
    min: 0,
    max: 1999
  }
];

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

  expect(result.current.filters[0].dirty).toBe(false);
  expect(result.current.filters[1].dirty).toBe(false);
  expect(result.current.filters[2].dirty).toBe(false);
  expect(result.current.filters[3].dirty).toBe(false);
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue("sort", "price-asc"); // setValue as id
  });

  expect(result.current.filters[0].value.id).toBe("price-asc");
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.filters[0].dirty).toBe(false);
  expect(result.current.filters[1].dirty).toBe(false);
  expect(result.current.filters[2].dirty).toBe(false);
  expect(result.current.filters[3].dirty).toBe(false);

  expect(onChange.mock.calls.length).toBe(1);

  act(() => {
    result.current.setValue("sort", null); // setValue as null
  });

  expect(result.current.filters[0].value).toBe(null);
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.filters[0].dirty).toBe(false);
  expect(result.current.filters[1].dirty).toBe(false);
  expect(result.current.filters[2].dirty).toBe(false);
  expect(result.current.filters[3].dirty).toBe(false);

  expect(onChange.mock.calls.length).toBe(2);

  act(() => {
    result.current.setValue("sort", filtersData[0].options[1]); // setValue as object
  });

  expect(result.current.filters[0].value.id).toBe("price-desc");
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.filters[0].dirty).toBe(false);
  expect(result.current.filters[1].dirty).toBe(false);
  expect(result.current.filters[2].dirty).toBe(false);
  expect(result.current.filters[3].dirty).toBe(false);

  expect(onChange.mock.calls.length).toBe(3);

  act(() => {
    result.current.setValue("sort", null, true); // setValue softly (dirty flag goes true)
  });

  expect(result.current.filters[0].value).toBe(null);
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.filters[0].dirty).toBe(true);
  expect(result.current.filters[1].dirty).toBe(false);
  expect(result.current.filters[2].dirty).toBe(false);
  expect(result.current.filters[3].dirty).toBe(false);

  expect(onChange.mock.calls.length).toBe(3);

  act(() => {
    result.current.setValue("sort", "price-desc", true); // return softly to previous value (dirty will become false).
  });

  expect(result.current.filters[0].value.id).toBe("price-desc");
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.filters[0].dirty).toBe(false);
  expect(result.current.filters[1].dirty).toBe(false);
  expect(result.current.filters[2].dirty).toBe(false);
  expect(result.current.filters[3].dirty).toBe(false);
  expect(onChange.mock.calls.length).toBe(3);

  act(() => {
    result.current.setValue("sort", null, true); // again setValue softly
  });

  expect(result.current.filters[0].value).toBe(null);
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.filters[0].dirty).toBe(true);
  expect(result.current.filters[1].dirty).toBe(false);
  expect(result.current.filters[2].dirty).toBe(false);
  expect(result.current.filters[3].dirty).toBe(false);

  expect(onChange.mock.calls.length).toBe(3);

  act(() => {
    result.current.commit(); // commit
  });

  expect(result.current.filters[0].value).toBe(null);
  expect(result.current.filters[1].value).toBe(null);
  expect(result.current.filters[2].value).toBe(null);
  expect(result.current.filters[3].value).toBe(null);

  expect(result.current.filters[0].dirty).toBe(false);
  expect(result.current.filters[1].dirty).toBe(false);
  expect(result.current.filters[2].dirty).toBe(false);
  expect(result.current.filters[3].dirty).toBe(false);

  expect(onChange.mock.calls.length).toBe(4);
});
