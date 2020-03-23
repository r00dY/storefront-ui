import { renderHook, act } from "@testing-library/react-hooks";
import useToggleState from "./index";

test("works in uncontrolled state / no default", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useToggleState({
      onChange
    })
  );

  expect(result.current.value).toBe(false);
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue(null); // change nothing
  });

  expect(result.current.value).toBe(false);
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue(true); // change to "dog"
  });

  expect(result.current.value).toBe(true);
  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.results[0].value).toBe(true);

  act(() => {
    result.current.setValue(false); // change back to nothing
  });

  expect(result.current.value).toBe(false);
  expect(onChange.mock.calls.length).toBe(2);
  expect(onChange.mock.results[1].value).toBe(false);
});

test("works in uncontrolled state / with defaults", () => {
  const { result } = renderHook(() =>
    useToggleState({
      defaultValue: true
    })
  );

  expect(result.current.value).toBe(true);
});

test("uncontrolled with unknown defaultValue should fall back to no default", () => {
  const { result } = renderHook(() =>
    useToggleState({
      defaultValue: "blablabla"
    })
  );

  expect(result.current.value).toBe(true);
});

test("controlled state: null value with allowEmpty=true", () => {
  const { result } = renderHook(() =>
    useToggleState({
      value: false,
      defaultValue: "blablabla" // should be ignored
    })
  );

  expect(result.current.value).toBe(false);
});

test("controlled state: unknown value", () => {
  const { result } = renderHook(() =>
    useToggleState({
      value: "blablabla",
      defaultValue: "blablabla" // should be ignored
    })
  );

  expect(result.current.value).toBe(true);
});

test("events work in controlled state", () => {
  const onChange = jest.fn(val => val);

  const { result } = renderHook(() =>
    useToggleState({
      value: false,
      onChange
    })
  );

  expect(result.current.value).toBe(false);
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue(false); // change nothing
  });

  expect(result.current.value).toBe(false);
  expect(onChange.mock.calls.length).toBe(0);

  act(() => {
    result.current.setValue(true); // change to "dog"
  });

  expect(result.current.value).toBe(false);
  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.results[0].value).toBe(true);
});
