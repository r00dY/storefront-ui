import { renderHook, act } from "@testing-library/react-hooks";
import useSelectState from "./index";

const animals = [
  {
    id: "cat"
  },
  {
    id: "dog"
  },
  {
    id: "hog"
  },
  {
    id: "cow"
  }
];

const animalsStrings = ["cat", "dog", "hog", "cow"];

test("works in uncontrolled state / allowEmpty=true / no default", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useSelectState({
      options: animals,
      onChange
    })
  );

  expect(result.current.value).toBeNull();
  expect(result.current.empty).toBe(true);
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue(null); // change nothing
  });

  expect(result.current.value).toBeNull();
  expect(result.current.empty).toBe(true);
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue(animals[1]); // change to "dog"
  });

  expect(result.current.value.id).toBe("dog");
  expect(result.current.empty).toBe(false);
  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.results[0].value.id).toBe("dog");

  act(() => {
    result.current.setValue(null); // change back to nothing
  });

  expect(result.current.value).toBeNull();
  expect(result.current.empty).toBe(true);
  expect(onChange.mock.calls.length).toBe(2);
  expect(onChange.mock.results[1].value).toBe(null);
});

test("works in uncontrolled state / allowEmpty=false / no default", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useSelectState({
      options: animals,
      allowEmpty: false,
      onChange
    })
  );

  expect(result.current.value.id).toBe("cat");
  expect(result.current.empty).toBe(false);

  act(() => {
    result.current.setValue(null); // change to empty
  });

  expect(result.current.value.id).toBe("cat");
  expect(result.current.empty).toBe(false);
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue(animals[1]); // change to "dog"
  });

  expect(result.current.value.id).toBe("dog");
  expect(result.current.empty).toBe(false);
  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.results[0].value.id).toBe("dog");
});

test("works in uncontrolled state / with defaults", () => {
  const { result } = renderHook(() =>
    useSelectState({
      options: animals,
      allowEmpty: false,
      defaultValue: animals[1]
    })
  );

  expect(result.current.value.id).toBe("dog");
  expect(result.current.empty).toBe(false);
});

test("defaultValue key as string", () => {
  const { result } = renderHook(() =>
    useSelectState({
      options: animals,
      allowEmpty: false,
      defaultValue: "dog"
    })
  );

  expect(result.current.value.id).toBe("dog");
  expect(result.current.empty).toBe(false);
});

test("uncontrolled with unknown defaultValue should fall back to no default", () => {
  const { result } = renderHook(() =>
    useSelectState({
      options: animals,
      allowEmpty: false,
      defaultValue: "blablabla"
    })
  );

  expect(result.current.value.id).toBe("cat");
  expect(result.current.empty).toBe(false);
});

test("controlled state: null value with allowEmpty=true", () => {
  const { result } = renderHook(() =>
    useSelectState({
      options: animals,
      value: null,
      defaultValue: "blablabla" // should be ignored
    })
  );

  expect(result.current.value).toBeNull();
  expect(result.current.empty).toBe(true);
});

test("controlled state: null value with allowEmpty=false", () => {
  const { result } = renderHook(() =>
    useSelectState({
      options: animals,
      value: null,
      allowEmpty: false,
      defaultValue: "blablabla" // should be ignored
    })
  );

  expect(result.current.value.id).toBe("cat");
  expect(result.current.empty).toBe(false);
});

test("controlled state: unknown value", () => {
  const { result } = renderHook(() =>
    useSelectState({
      options: animals,
      value: "blablabla",
      defaultValue: "blablabla" // should be ignored
    })
  );

  expect(result.current.value).toBeNull();
  expect(result.current.empty).toBe(true);
});

test("controlled state: value as string", () => {
  const { result } = renderHook(() =>
    useSelectState({
      options: animals,
      value: "cow",
      defaultValue: "blablabla" // should be ignored
    })
  );

  expect(result.current.value.id).toBe("cow");
  expect(result.current.empty).toBe(false);
});

test("controlled state: value as object", () => {
  const { result } = renderHook(() =>
    useSelectState({
      options: animals,
      value: animals[3],
      defaultValue: "blablabla" // should be ignored
    })
  );

  expect(result.current.value.id).toBe("cow");
  expect(result.current.empty).toBe(false);
});

test("works with string array as input", () => {
  const { result } = renderHook(() =>
    useSelectState({
      options: animalsStrings,
      value: "dog"
    })
  );

  expect(result.current.value).toBe("dog");
});

test("events work in controlled state", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useSelectState({
      options: animals,
      value: null,
      onChange
    })
  );

  expect(result.current.value).toBeNull();
  expect(result.current.empty).toBe(true);
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue(null); // change nothing
  });

  expect(result.current.value).toBeNull();
  expect(result.current.empty).toBe(true);
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue(animals[1]); // change to "dog"
  });

  expect(result.current.value).toBeNull();
  expect(result.current.empty).toBe(true);
  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.results[0].value.id).toBe("dog");
});
