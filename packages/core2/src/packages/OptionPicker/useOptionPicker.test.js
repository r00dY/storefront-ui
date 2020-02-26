import { renderHook, act } from "@testing-library/react-hooks";
import { useDupa } from "./index";

test("should increment counter", () => {
  const { result } = renderHook(() => useDupa(2));

  expect(result.current.val).toBe(2);

  act(() => {
    result.current.increment();
  });

  expect(result.current.val).toBe(3);
});
