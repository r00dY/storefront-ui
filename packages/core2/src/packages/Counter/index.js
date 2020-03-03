/** @jsx jsx */
import React, { useState, useRef, useLayoutEffect } from "react";
import { getElementSpec, jsx, createElement, splitSx } from "..";

import ButtonRaw2 from "../ButtonRaw";
import InputRaw$ from "../InputRaw";
import Box from "../Box";

import SelectNative from "../SelectNative";
import InputRaw from "../InputRaw";

const defaults = {
  $buttonDecrease: {
    __type: ButtonRaw2,
    __children: "-"
  },
  $buttonIncrease: {
    __type: ButtonRaw2,
    __children: "+"
  },
  $root: ({ focused }) => ({
    position: "relative",
    display: "inline-flex",
    verticalAlign: "top",
    overflow: "hidden",
    flexDirection: "row"
  }),
  $input: ({}) => ({
    __type: InputRaw,
    textAlign: "center"
  }),
  $select: () => ({
    __type: SelectNative,
    __props: {
      allowEmpty: false
    }
  })
};

function useCounter(props = {}) {
  let {
    step = 1,
    defaultValue,
    maxValue = 999,
    selectOptionsAmount = 19,
    onChange
  } = props;

  const [amount, setAmount] = useState(defaultValue || step);
  const [inputValue, setInputValue] = useState(defaultValue || step);
  const [
    inputFocusedAfterSelectingMore,
    setInputFocusedAfterSelectingMore
  ] = useState(false);

  const inputRef = useRef(null);

  const setValue = number => {
    let newVal = number;
    if (isNaN(newVal)) {
      newVal = 0;
    }

    newVal = Math.max(newVal, step);
    newVal = Math.min(newVal, maxValue);

    // Check if multiple of step
    const rest = newVal % step;
    if (rest != 0) {
      newVal = newVal - rest;
    }

    setAmount(newVal);
    setInputValue(newVal);

    if (newVal !== amount && onChange) {
      onChange(newVal);
    }
  };

  const buttonIncrementProps = {
    onClick: () => {
      setValue(amount + step);
    }
  };

  const buttonDecrementProps = {
    onClick: () => {
      setValue(amount - step);
    }
  };

  const inputProps = {
    value: inputValue,
    onChange: e => {
      setInputValue(e.target.value);
    },
    onBlur: () => {
      setValue(parseInt(inputValue));
      setInputFocusedAfterSelectingMore(false);
    },
    inputRef: inputRef
  };

  useLayoutEffect(() => {
    if (inputFocusedAfterSelectingMore) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  });

  // select
  const selectOptions = [];
  for (let i = 1; i <= selectOptionsAmount; i++) {
    selectOptions.push(i * step);
  }

  const maxSelectAmount = selectOptionsAmount * step;
  const moreOption = `${maxSelectAmount + step}+`;
  selectOptions.push(moreOption);

  const exceedsSelectRange =
    amount > maxSelectAmount || inputFocusedAfterSelectingMore;

  const selectProps = {
    options: selectOptions,
    value: exceedsSelectRange ? moreOption : amount,
    onChange: val => {
      if (val === moreOption) {
        setInputValue("");
        setInputFocusedAfterSelectingMore(true);
        // inputRef.current.focus();
      } else {
        setValue(val);
      }
      // console.log('on change!', val);
    }
  };

  return {
    // inputFocusedAfterSelectingMore,
    exceedsSelectRange,
    buttonIncrementProps,
    buttonDecrementProps,
    inputProps,
    selectProps,
    amount,
    setAmount: setValue
  };
}

function Counter$(props) {
  let { sx = {} } = props;

  const controller = useCounter(props);

  const [focused, setFocused] = useState(false);

  const state = {
    focused
  };

  sx = typeof sx === "function" ? sx(state) : sx;
  const [css, customSx] = splitSx(sx);

  const rootCss =
    typeof customSx.$root === "function"
      ? customSx.$root(state)
      : customSx.$root;

  const onFocus = e => {
    setFocused(true);
  };

  const onBlur = e => {
    setFocused(false);
  };

  const buttonDecrease = createElement(
    getElementSpec(
      customSx.$buttonDecrease,
      defaults.$buttonDecrease,
      state,
      {
        onFocus,
        onBlur,
        ...controller.buttonDecrementProps
      },
      "-"
    )
  );

  console.log(buttonDecrease);

  const buttonIncrease = createElement(
    getElementSpec(
      customSx.$buttonIncrease,
      defaults.$buttonIncrease,
      state,
      {
        onFocus,
        onBlur,
        ...controller.buttonIncrementProps
      },
      "+"
    )
  );
  const input = createElement(
    getElementSpec(customSx.$input, defaults.$input, state),
    {
      type: "number",
      onFocus,
      onBlur,
      ...controller.inputProps
    }
  );

  const select = createElement(
    getElementSpec(customSx.$select, defaults.$select, state),
    {
      onFocus,
      onBlur,
      ...controller.selectProps
    }
  );

  return (
    <Box sx={css}>
      <Box
        sx={[
          {
            display: "flex",
            flexDirection: "row"
          },
          defaults.$root(state),
          rootCss
        ]}
      >
        {buttonDecrease}
        {controller.exceedsSelectRange && input}
        {!controller.exceedsSelectRange && select}
        {buttonIncrease}
      </Box>
    </Box>
  );
}

export default Counter$;
export { useCounter };
