import { renderHook, act } from "@testing-library/react-hooks";
import useNormalizedOptions from "./index";

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
  const { result } = renderHook(() =>
    useNormalizedOptions({
      options: animals
    })
  );

  expect(result.current.defaultValue).toBeNull();
  expect(result.current.value).toBeUndefined();
  expect(result.current.empty).toBe(true);
  expect(result.current.isControlled).toBe(false);

  act(() => {
    result.current.onChange(null); // change nothing
  });

  expect(result.current.defaultValue).toBeNull();
  expect(result.current.value).toBeUndefined();
  expect(result.current.empty).toBe(true);
  expect(result.current.isControlled).toBe(false);

  act(() => {
    result.current.onChange(animals[1]); // change to "dog"
  });

  expect(result.current.defaultValue).toBeNull();
  expect(result.current.value).toBeUndefined();
  expect(result.current.empty).toBe(false);
  expect(result.current.isControlled).toBe(false);

  act(() => {
    result.current.onChange(null); // change back to nothing
  });

  expect(result.current.defaultValue).toBeNull();
  expect(result.current.value).toBeUndefined();
  expect(result.current.empty).toBe(true);
  expect(result.current.isControlled).toBe(false);
});

test("works in uncontrolled state / allowEmpty=false / no default", () => {
  const { result } = renderHook(() =>
    useNormalizedOptions({
      options: animals,
      allowEmpty: false
    })
  );

  expect(result.current.defaultValue.id).toBe("cat");
  expect(result.current.value).toBeUndefined();
  expect(result.current.empty).toBe(false);
  expect(result.current.isControlled).toBe(false);

  act(() => {
    result.current.onChange(null); // change to empty
  });

  expect(result.current.defaultValue.id).toBe("cat");
  expect(result.current.value).toBeUndefined();
  expect(result.current.empty).toBe(false);
  expect(result.current.isControlled).toBe(false);

  act(() => {
    result.current.onChange(animals[1]); // change to "dog"
  });

  expect(result.current.defaultValue.id).toBe("cat"); // nothing should change as this is controlled element and initial defaultValue shouldn't change ever
  expect(result.current.value).toBeUndefined();
  expect(result.current.empty).toBe(false);
  expect(result.current.isControlled).toBe(false);
});

test("works in uncontrolled state / with defaults", () => {
  const { result } = renderHook(() =>
    useNormalizedOptions({
      options: animals,
      allowEmpty: false,
      defaultValue: animals[1]
    })
  );

  expect(result.current.defaultValue.id).toBe("dog");
  expect(result.current.value).toBeUndefined();
  expect(result.current.empty).toBe(false);
  expect(result.current.isControlled).toBe(false);
});

test("defaultValue key as string", () => {
  const { result } = renderHook(() =>
    useNormalizedOptions({
      options: animals,
      allowEmpty: false,
      defaultValue: "dog"
    })
  );

  expect(result.current.defaultValue.id).toBe("dog");
  expect(result.current.value).toBeUndefined();
  expect(result.current.empty).toBe(false);
  expect(result.current.isControlled).toBe(false);
});

test("uncontrolled with unknown defaultValue should fall back to no default", () => {
  const { result } = renderHook(() =>
    useNormalizedOptions({
      options: animals,
      allowEmpty: false,
      defaultValue: "blablabla"
    })
  );

  expect(result.current.defaultValue.id).toBe("cat");
  expect(result.current.value).toBeUndefined();
  expect(result.current.empty).toBe(false);
  expect(result.current.isControlled).toBe(false);
});

test("controlled state: null value with allowEmpty=true", () => {
  const { result } = renderHook(() =>
    useNormalizedOptions({
      options: animals,
      value: null,
      defaultValue: "blablabla" // should be ignored
    })
  );

  expect(result.current.defaultValue).toBeUndefined();
  expect(result.current.value).toBeNull();
  expect(result.current.empty).toBe(true);
  expect(result.current.isControlled).toBe(true);
});

test("controlled state: null value with allowEmpty=false", () => {
  const { result } = renderHook(() =>
    useNormalizedOptions({
      options: animals,
      value: null,
      allowEmpty: false,
      defaultValue: "blablabla" // should be ignored
    })
  );

  expect(result.current.defaultValue).toBeUndefined();
  expect(result.current.value.id).toBe("cat");
  expect(result.current.empty).toBe(false);
  expect(result.current.isControlled).toBe(true);
});

test("controlled state: unknown value", () => {
  const { result } = renderHook(() =>
    useNormalizedOptions({
      options: animals,
      value: "blablabla",
      defaultValue: "blablabla" // should be ignored
    })
  );

  expect(result.current.defaultValue).toBeUndefined();
  expect(result.current.value).toBeNull();
  expect(result.current.empty).toBe(true);
  expect(result.current.isControlled).toBe(true);
});

test("controlled state: value as string", () => {
  const { result } = renderHook(() =>
    useNormalizedOptions({
      options: animals,
      value: "cow",
      defaultValue: "blablabla" // should be ignored
    })
  );

  expect(result.current.defaultValue).toBeUndefined();
  expect(result.current.value.id).toBe("cow");
  expect(result.current.empty).toBe(false);
  expect(result.current.isControlled).toBe(true);
});

test("controlled state: value as object", () => {
  const { result } = renderHook(() =>
    useNormalizedOptions({
      options: animals,
      value: animals[3],
      defaultValue: "blablabla" // should be ignored
    })
  );

  expect(result.current.defaultValue).toBeUndefined();
  expect(result.current.value.id).toBe("cow");
  expect(result.current.empty).toBe(false);
  expect(result.current.isControlled).toBe(true);
});

test("works with string array as input", () => {
  const { result } = renderHook(() =>
    useNormalizedOptions({
      options: animalsStrings,
      value: "dog"
    })
  );

  expect(result.current.value.id).toBe("dog");
});
