import { renderHook, act } from "@testing-library/react-hooks";
import { useOptionPicker } from "./index";

import { options, products, productsPartial } from "./data";

test("extracts selectedValues properly", () => {
  const { result } = renderHook(() =>
    useOptionPicker({
      options,
      products,
      initialProduct: products[0]
    })
  );

  expect(result.current.selectedValues.size.id).toBe("38");
  expect(result.current.selectedValues.color.id).toBe("red");
  expect(result.current.selectedValues.style.id).toBe("rustic");

  act(() => {
    result.current.selectProduct(products[products.length - 1]);
  });

  expect(result.current.selectedValues.size.id).toBe("42");
  expect(result.current.selectedValues.color.id).toBe("green");
  expect(result.current.selectedValues.style.id).toBe("modern");
});

test("properly selects product", () => {
  const { result } = renderHook(() =>
    useOptionPicker({
      options,
      products,
      initialProduct: products[10]
    })
  );

  expect(result.current.product.id).toBe(products[10].id);

  act(() => {
    result.current.selectProduct(products[3]);
  });

  expect(result.current.product.id).toBe(products[3].id);
});

test("properly selects values", () => {
  const { result } = renderHook(() =>
    useOptionPicker({
      options,
      products,
      initialProduct: products[10]
    })
  );

  expect(result.current.selectedValues.size.id).toBe("39");
  expect(result.current.selectedValues.color.id).toBe("green");
  expect(result.current.selectedValues.style.id).toBe("rustic");

  act(() => {
    result.current.selectValue("color", "red"); // option and value as ID
  });

  expect(result.current.selectedValues.size.id).toBe("39");
  expect(result.current.selectedValues.color.id).toBe("red");
  expect(result.current.selectedValues.style.id).toBe("rustic");

  act(() => {
    result.current.selectValue("color", options[1].values[1]); // value as object
  });

  expect(result.current.selectedValues.size.id).toBe("39");
  expect(result.current.selectedValues.color.id).toBe("blue");
  expect(result.current.selectedValues.style.id).toBe("rustic");

  act(() => {
    result.current.selectValue(options[2], "modern"); // option as object
  });

  expect(result.current.selectedValues.size.id).toBe("39");
  expect(result.current.selectedValues.color.id).toBe("blue");
  expect(result.current.selectedValues.style.id).toBe("modern");
});

test("properly doest NOT select value when it doesn't exist", () => {
  const { result } = renderHook(() =>
    useOptionPicker({
      options,
      products: productsPartial,
      initialProduct: productsPartial[0]
    })
  );

  expect(result.current.selectedValues.size.id).toBe("38");
  expect(result.current.selectedValues.color.id).toBe("red");
  expect(result.current.selectedValues.style.id).toBe("rustic");

  act(() => {
    result.current.selectValue("style", "modern"); // option and value as ID
  });

  expect(result.current.selectedValues.size.id).toBe("38");
  expect(result.current.selectedValues.color.id).toBe("red");
  expect(result.current.selectedValues.style.id).toBe("rustic");
});

test("properly applies default 'hidden' strategy", () => {
  const { result } = renderHook(() =>
    useOptionPicker({
      options,
      products: productsPartial,
      initialProduct: productsPartial[0]
    })
  );

  expect(result.current.stateForValue("style", "modern")).toBe("hidden");
  expect(result.current.stateForValue("size", "42")).toBe("hidden");
  expect(result.current.stateForValue("color", "green")).toBe("hidden");

  expect(typeof result.current.stateForValue("color", "blue")).toBe("object");
});

test("properly applies default 'disabled' strategy", () => {
  const modifiedOptions = [...options];
  modifiedOptions[2] = {
    ...modifiedOptions[2],
    missingProductStrategy: "disabled"
  };

  const { result } = renderHook(() =>
    useOptionPicker({
      options: modifiedOptions,
      products: productsPartial,
      initialProduct: productsPartial[0]
    })
  );

  expect(result.current.stateForValue("size", "42")).toBe("hidden");
  expect(result.current.stateForValue("color", "green")).toBe("hidden");
  expect(result.current.stateForValue("style", "modern")).toBe("disabled");

  expect(typeof result.current.stateForValue("color", "blue")).toBe("object");
});

test("properly applies default 'alternative' strategy", () => {
  const modifiedOptions = options.map(o => ({
    ...o,
    missingProductStrategy: "alternative"
  }));

  const { result } = renderHook(() =>
    useOptionPicker({
      options: modifiedOptions,
      products: productsPartial,
      initialProduct: productsPartial[0]
    })
  );

  expect(typeof result.current.stateForValue("size", "39")).toBe("object");

  act(() => {
    result.current.selectValue("size", "39");
  });

  expect(result.current.selectedValues.color.id).toBe("blue");
  expect(result.current.selectedValues.size.id).toBe("39");
  expect(result.current.selectedValues.style.id).toBe("rustic");
});

test("extracts options properly (all options)", () => {
  const { result } = renderHook(() =>
    useOptionPicker({
      products,
      initialProduct: products[0],
      options: [
        {
          id: "size",
          value: p => p._size // can return object or string. If string then it's treated as ID. If value exist in values then values takes precedence.
        },
        {
          id: "color",
          value: p => p._color
        },
        {
          id: "style",
          value: p => p._style
        }
      ]
    })
  );

  expect(result.current.options[0].values.length).toBe(5);
  expect(result.current.options[1].values.length).toBe(3);
  expect(result.current.options[2].values.length).toBe(2);
  //
  // act(() => {
  //   result.current.selectProduct(products[products.length - 1]);
  // });
  //
  // expect(result.current.selectedValues.size.id).toBe("42");
  // expect(result.current.selectedValues.color.id).toBe("green");
  // expect(result.current.selectedValues.style.id).toBe("modern");
});
