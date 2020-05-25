import { renderHook, act } from "@testing-library/react-hooks";
import useMultiSelectState from "./index";
import useSelectState from "../useSelectState";

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

const animalsWithNumberIds = [
  {
    id: 1,
    value: "cat"
  },
  {
    id: 2,
    value: "dog"
  },
  {
    id: 3,
    value: "hog"
  },
  {
    id: 4,
    value: "cow"
  }
];

test("works in uncontrolled state / no default", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animals,
      onChange
    })
  );

  expect(result.current.value).toEqual(expect.arrayContaining([]));
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue(null); // change nothing
  });

  expect(result.current.value).toEqual(expect.arrayContaining([]));
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue([animals[1], animals[2]]); // change to "dog"
  });

  expect(result.current.value).toEqual(
    expect.arrayContaining([animals[1], animals[2]])
  );
  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.results[0].value).toEqual(
    expect.arrayContaining([animals[1], animals[2]])
  );

  act(() => {
    result.current.setValue([]); // change back to nothing
  });

  expect(result.current.value).toEqual(expect.arrayContaining([]));
  expect(onChange.mock.calls.length).toBe(2);
  expect(onChange.mock.results[1].value).toEqual(expect.arrayContaining([]));
});

test("works in uncontrolled state / with defaults", () => {
  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animals,
      allowEmpty: false,
      defaultValue: [animals[1], animals[3]]
    })
  );

  expect(result.current.value).toEqual(
    expect.arrayContaining([animals[1], animals[3]])
  );
});

test("defaultValue key as string", () => {
  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animals,
      allowEmpty: false,
      defaultValue: ["dog", "cat"]
    })
  );

  expect(result.current.value).toEqual(
    expect.arrayContaining([animals[1], animals[0]])
  );
});

test("uncontrolled with unknown defaultValue should fall back to no default", () => {
  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animals,
      defaultValue: "blablabla"
    })
  );

  expect(result.current.value).toEqual(expect.arrayContaining([]));
});

test("changing order of items doesn't cause onChange", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animals,
      defaultValue: ["dog", "cat", "cow"],
      onChange
    })
  );

  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue(["cat", "cow", "dog"]); // change nothing
  });

  expect(onChange.mock.calls.length).toBe(0);
});

test("[mutliselect] controlled state: null value", () => {
  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animals,
      value: null
    })
  );

  expect(result.current.value).toEqual(expect.arrayContaining([]));
});

test("controlled state: incorrect value (not an array)", () => {
  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animals,
      value: "blablabla"
    })
  );

  expect(result.current.value).toEqual(expect.arrayContaining([]));
});

test("controlled state: value as string", () => {
  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animals,
      value: ["cow", "dog"]
    })
  );

  expect(result.current.value).toEqual(
    expect.arrayContaining([animals[3], animals[1]])
  );
});

test("controlled state: value as object", () => {
  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animals,
      value: [animals[3], animals[1]]
    })
  );
  expect(result.current.value).toEqual(
    expect.arrayContaining([animals[3], animals[1]])
  );
});

test("controlled state: value as string and object (mixed)", () => {
  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animals,
      value: [animals[3], "dog"]
    })
  );
  expect(result.current.value).toEqual(
    expect.arrayContaining([animals[3], animals[1]])
  );
});

test("uncontrolled works with string array as input", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animalsStrings,
      defaultValue: ["dog", "cat"],
      onChange
    })
  );

  expect(result.current.value).toEqual(expect.arrayContaining(["dog", "cat"]));
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue(["cow"]); // change to empty
  });

  expect(result.current.value).toEqual(expect.arrayContaining(["cow"]));
  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.results[0].value).toEqual(
    expect.arrayContaining(["cow"])
  );
});

test("controlled works with string array as input", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animalsStrings,
      value: ["cat", "dog"],
      onChange
    })
  );

  expect(result.current.value).toEqual(expect.arrayContaining(["cat", "dog"]));
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue(["cow"]); // change to empty
  });

  expect(result.current.value).toEqual(expect.arrayContaining(["cat", "dog"]));
  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.results[0].value).toEqual(
    expect.arrayContaining(["cow"])
  );
});

test("events work in controlled state", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animals,
      value: null,
      onChange
    })
  );

  expect(result.current.value).toEqual(expect.arrayContaining([]));
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue(null); // change nothing
  });

  expect(result.current.value).toEqual(expect.arrayContaining([]));
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue([animals[1], animals[2]]); // change to "dog"
  });

  expect(result.current.value).toEqual(expect.arrayContaining([]));
  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.results[0].value).toEqual(
    expect.arrayContaining([animals[1], animals[2]])
  );
});

test("isSelected works", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animals,
      onChange
    })
  );

  expect(result.current.isSelected("cat")).toBe(false);
  expect(result.current.isSelected("dog")).toBe(false);
  expect(result.current.isSelected("hog")).toBe(false);
  expect(result.current.isSelected("cow")).toBe(false);

  expect(result.current.isSelected(animals[0])).toBe(false);
  expect(result.current.isSelected(animals[1])).toBe(false);
  expect(result.current.isSelected(animals[2])).toBe(false);
  expect(result.current.isSelected(animals[3])).toBe(false);

  act(() => {
    result.current.setValue(["cow", "cat"]);
  });

  expect(result.current.isSelected("cat")).toBe(true);
  expect(result.current.isSelected("dog")).toBe(false);
  expect(result.current.isSelected("hog")).toBe(false);
  expect(result.current.isSelected("cow")).toBe(true);

  expect(result.current.isSelected(animals[0])).toBe(true);
  expect(result.current.isSelected(animals[1])).toBe(false);
  expect(result.current.isSelected(animals[2])).toBe(false);
  expect(result.current.isSelected(animals[3])).toBe(true);

  act(() => {
    result.current.setValue(["cow", "cat", "dog", "hog"]);
  });

  expect(result.current.isSelected("cat")).toBe(true);
  expect(result.current.isSelected("dog")).toBe(true);
  expect(result.current.isSelected("hog")).toBe(true);
  expect(result.current.isSelected("cow")).toBe(true);

  expect(result.current.isSelected(animals[0])).toBe(true);
  expect(result.current.isSelected(animals[1])).toBe(true);
  expect(result.current.isSelected(animals[2])).toBe(true);
  expect(result.current.isSelected(animals[3])).toBe(true);

  act(() => {
    result.current.setValue(null); // change nothing
  });

  expect(result.current.isSelected("cat")).toBe(false);
  expect(result.current.isSelected("dog")).toBe(false);
  expect(result.current.isSelected("hog")).toBe(false);
  expect(result.current.isSelected("cow")).toBe(false);

  expect(result.current.isSelected(animals[0])).toBe(false);
  expect(result.current.isSelected(animals[1])).toBe(false);
  expect(result.current.isSelected(animals[2])).toBe(false);
  expect(result.current.isSelected(animals[3])).toBe(false);
});

test("select and unSelect work", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animals,
      onChange
    })
  );

  expect(result.current.isSelected("cat")).toBe(false);
  expect(result.current.isSelected("dog")).toBe(false);
  expect(result.current.isSelected("hog")).toBe(false);
  expect(result.current.isSelected("cow")).toBe(false);

  act(() => {
    result.current.selectValue("cat");
  });

  expect(result.current.isSelected("cat")).toBe(true);
  expect(result.current.isSelected("dog")).toBe(false);
  expect(result.current.isSelected("hog")).toBe(false);
  expect(result.current.isSelected("cow")).toBe(false);

  act(() => {
    result.current.selectValue("blablabla");
  });

  expect(result.current.isSelected("cat")).toBe(true);
  expect(result.current.isSelected("dog")).toBe(false);
  expect(result.current.isSelected("hog")).toBe(false);
  expect(result.current.isSelected("cow")).toBe(false);

  act(() => {
    result.current.selectValue("dog");
  });

  act(() => {
    result.current.selectValue("hog");
  });

  expect(result.current.isSelected("cat")).toBe(true);
  expect(result.current.isSelected("dog")).toBe(true);
  expect(result.current.isSelected("hog")).toBe(true);
  expect(result.current.isSelected("cow")).toBe(false);

  act(() => {
    result.current.unselectValue("blablabla");
  });

  expect(result.current.isSelected("cat")).toBe(true);
  expect(result.current.isSelected("dog")).toBe(true);
  expect(result.current.isSelected("hog")).toBe(true);
  expect(result.current.isSelected("cow")).toBe(false);

  act(() => {
    result.current.unselectValue("cat");
  });

  expect(result.current.isSelected("cat")).toBe(false);
  expect(result.current.isSelected("dog")).toBe(true);
  expect(result.current.isSelected("hog")).toBe(true);
  expect(result.current.isSelected("cow")).toBe(false);

  act(() => {
    result.current.unselectValue("dog");
  });

  act(() => {
    result.current.unselectValue("hog");
  });

  expect(result.current.isSelected("cat")).toBe(false);
  expect(result.current.isSelected("dog")).toBe(false);
  expect(result.current.isSelected("hog")).toBe(false);
  expect(result.current.isSelected("cow")).toBe(false);
});

test("number ids work", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useMultiSelectState({
      options: animalsWithNumberIds,
      value: [1],
      onChange
    })
  );

  expect(result.current.isSelected(1));

  act(() => {
    result.current.selectValue("2"); // change nothing
  });

  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.results[0].value).toEqual(
    expect.arrayContaining([animalsWithNumberIds[0], animalsWithNumberIds[1]])
  );
});
