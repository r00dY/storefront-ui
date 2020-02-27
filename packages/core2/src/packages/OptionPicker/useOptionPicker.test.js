import { renderHook, act } from "@testing-library/react-hooks";
import { useOptionPicker } from "./index";

const options = [
  {
    id: "size",
    name: "Size",
    values: [
      {
        id: "38",
        name: "38"
      },
      {
        id: "39",
        name: "39"
      },
      {
        id: "40",
        name: "40"
      },
      {
        id: "41",
        name: "41"
      },
      {
        id: "42",
        name: "42"
      }
    ]
  },
  {
    id: "color",
    name: "Color",
    values: [
      {
        id: "red",
        name: "Red",
        hex: "#ff0000"
      },
      {
        id: "blue",
        name: "Blue",
        hex: "#0000ff"
      },
      {
        id: "green",
        name: "Green",
        hex: "#00ff00"
      }
    ]
  },
  {
    id: "style",
    name: "Style",
    values: [
      {
        id: "rustic",
        name: "Rustic"
      },
      {
        id: "modern",
        name: "Modern"
      }
    ]
  }
];

const products = [];

options[0].values.forEach((size, i) => {
  options[1].values.forEach((color, j) => {
    options[2].values.forEach((style, k) => {
      products.push({
        id: "product-" + (i * 100 + j * 10 + k),
        selectedOptions: {
          size: size.id,
          color: color.id,
          style: style.id
        }
      });
    });
  });
});

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
