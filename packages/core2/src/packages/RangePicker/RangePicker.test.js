import { renderHook, act } from "@testing-library/react-hooks";
import { normalizeRangePickerValue } from "./index";

test("[normalizeRangePickerValue] allowEmpty=false ", () => {
  const onChange = jest.fn(val => val);

  let value;

  value = normalizeRangePickerValue({ min: 0, max: 100, value: "blablabla" });
  expect(value.from).toBe(0);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({ min: 0, max: 100, value: undefined });
  expect(value.from).toBe(0);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({ min: 0, max: 100, value: null });
  expect(value.from).toBe(0);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    min: 0,
    max: 100,
    value: { blablabla: 0 }
  });
  expect(value.from).toBe(0);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    min: 0,
    max: 100,
    value: { from: -100, to: 100 }
  });
  expect(value.from).toBe(0);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    min: 0,
    max: 100,
    value: { from: 50, to: 100 }
  });
  expect(value.from).toBe(50);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    min: 0,
    max: 100,
    value: { from: 150, to: 100 }
  });
  expect(value.from).toBe(100);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({ min: 0, max: 100, value: { to: 100 } });
  expect(value.from).toBe(0);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    min: 0,
    max: 100,
    value: { from: NaN, to: 100 }
  });
  expect(value.from).toBe(0);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    min: 0,
    max: 100,
    value: { from: "blablabla", to: 100 }
  });
  expect(value.from).toBe(0);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    min: 0,
    max: 100,
    value: { from: 0, to: -50 }
  });
  expect(value.from).toBe(0);
  expect(value.to).toBe(0);

  value = normalizeRangePickerValue({
    min: 0,
    max: 100,
    value: { from: 0, to: 50 }
  });
  expect(value.from).toBe(0);
  expect(value.to).toBe(50);

  value = normalizeRangePickerValue({
    min: 0,
    max: 100,
    value: { from: 0, to: 150 }
  });
  expect(value.from).toBe(0);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({ min: 0, max: 100, value: { to: 150 } });
  expect(value.from).toBe(0);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    min: 0,
    max: 100,
    value: { to: "blablabla" }
  });
  expect(value.from).toBe(0);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    min: 0,
    max: 100,
    value: { from: 70, to: 30 }
  });
  expect(value.from).toBe(70);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue(
    { min: 0, max: 100, value: { from: 70, to: 30 } },
    false
  );
  expect(value.from).toBe(0);
  expect(value.to).toBe(30);
});

test("[normalizeRangePickerValue] allowEmpty=true ", () => {
  const onChange = jest.fn(val => val);

  let value;

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: "blablabla"
  });
  expect(value.from).toBe(null);
  expect(value.to).toBe(null);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: undefined
  });
  expect(value.from).toBe(null);
  expect(value.to).toBe(null);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: null
  });
  expect(value.from).toBe(null);
  expect(value.to).toBe(null);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: { blablabla: 0 }
  });
  expect(value.from).toBe(null);
  expect(value.to).toBe(null);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: { from: -100, to: 100 }
  });
  expect(value.from).toBe(0);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    value: { from: -100, to: 100 }
  });
  expect(value.from).toBe(-100);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: { from: 50, to: 100 }
  });
  expect(value.from).toBe(50);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: { from: 150, to: 100 }
  });
  expect(value.from).toBe(100);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: { to: 100 }
  });
  expect(value.from).toBe(null);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: { from: NaN, to: 100 }
  });
  expect(value.from).toBe(null);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: { from: "blablabla", to: 100 }
  });
  expect(value.from).toBe(null);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: { from: 0, to: -50 }
  });
  expect(value.from).toBe(0);
  expect(value.to).toBe(0);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: { from: 0, to: 50 }
  });
  expect(value.from).toBe(0);
  expect(value.to).toBe(50);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: { from: 0, to: 150 }
  });
  expect(value.from).toBe(0);
  expect(value.to).toBe(100);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: { from: -50 }
  });
  expect(value.from).toBe(0);
  expect(value.to).toBe(null);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: { to: "blablabla" }
  });
  expect(value.from).toBe(null);
  expect(value.to).toBe(null);

  value = normalizeRangePickerValue({
    allowEmpty: true,
    min: 0,
    max: 100,
    value: { from: 70, to: 30 }
  });
  expect(value.from).toBe(70);
  expect(value.to).toBe(null);

  value = normalizeRangePickerValue(
    { allowEmpty: true, min: 0, max: 100, value: { from: 70, to: 30 } },
    false
  );
  expect(value.from).toBe(null);
  expect(value.to).toBe(30);

  value = normalizeRangePickerValue({
    min: 0,
    max: 100,
    value: { from: 1.234, to: 99.4321 }
  });
  expect(value.from).toBe(1);
  expect(value.to).toBe(99);

  value = normalizeRangePickerValue({
    min: 0,
    max: 100,
    fractionDigits: 2,
    value: { from: 1.234, to: 99.4321 }
  });
  expect(value.from).toBe(1.23);
  expect(value.to).toBe(99.43);
});
