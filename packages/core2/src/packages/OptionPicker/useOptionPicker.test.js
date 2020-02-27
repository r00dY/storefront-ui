import { renderHook, act } from "@testing-library/react-hooks";
import { useOptionPicker } from "./index";

import { options, products } from "./data";

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

test("properly creates selectProps", () => {
  const { result } = renderHook(() =>
    useOptionPicker({
      options,
      products,
      initialProduct: products[10]
    })
  );

  console.log(result.current.options.map(o => o.selectProps));
});
