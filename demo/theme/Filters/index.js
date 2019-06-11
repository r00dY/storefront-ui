import { FiltersColumn$ } from "storefront-ui/Filters";
import { AccordionHeader } from "../AccordionHeader";
import { ItemListAccordion } from "../ItemListAccordion";

import { Input } from "../Input";

import { Button } from "../Button";

import { useState, useRef } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import React from "react";
import PropTypes from "prop-types";

const RangePicker = props => {
  let { onChange, value, min, max, unit, neverEmpty, snapToMinMax } = props;

  if (neverEmpty && (typeof min !== "number" || typeof max !== "number")) {
    throw new Error(
      "[RangePicker] If neverEmpty=true, you must set min and max props"
    );
  }

  const defaultValue = {
    from: neverEmpty ? min : "",
    to: neverEmpty ? max : ""
  };

  value = value || {};

  const isClearable =
    typeof value.from !== "undefined" || typeof value.to !== "undefined";

  value = {
    from: typeof value.from === "undefined" ? defaultValue.from : value.from,
    to: typeof value.to === "undefined" ? defaultValue.to : value.to
  };

  const [state, setState] = useState({
    from: undefined,
    to: undefined,
    isEditing: false
  });

  const timeout = useRef(null);

  // Function taking new state (after blur) and correcting it if invalid
  const stateReducer = (newState, input, nothingFocused) => {
    // set value to default if input was cleared, if neverEmpty, it will be minimum value.
    if (newState[input] === "") {
      newState = {
        ...state,
        [input]: defaultValue[input]
      };
    }

    // snap to min / max
    if (newState[input] !== "") {
      // always snap negative values to 0
      if (newState[input] < 0) {
        newState = {
          ...state,
          [input]: 0
        };
      }

      if (snapToMinMax) {
        if (typeof min === "number" && newState[input] < min) {
          newState = {
            ...state,
            [input]: min || 0
          };
        } else if (typeof max === "number" && newState[input] > max) {
          newState = {
            ...state,
            [input]: max
          };
        }
      }
    }

    // correct if from > to
    if (nothingFocused) {
      if (
        typeof newState.from === "number" &&
        typeof newState.to === "number" &&
        newState.from > newState.to
      ) {
        newState = {
          ...newState,
          [input]: input === "from" ? newState.to : newState.from
        };
      }
    }

    return newState;
  };

  const onBlur = input => {
    setState(stateReducer(state, input, false));

    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      const newState = stateReducer(state, input, true);
      setState({ ...newState, isEditing: false });

      if (onChange) {
        let newValue = {
          ...newState
        };

        delete newValue.isEditing;
        if (newValue.from === "" || newValue.from === min) {
          delete newValue.from;
        }
        if (newValue.to === "" || newValue.to === max) {
          delete newValue.to;
        }

        onChange(newValue);
      }
    }, 0);
  };

  const setValue = (val, input) => {
    val = parseFloat(val);
    if (isNaN(val)) {
      val = "";
    }

    setState({
      ...state,
      [input]: val
    });
  };

  const onFocus = () => {
    clearTimeout(timeout.current);

    if (!state.isEditing) {
      setState({
        from: value.from,
        to: value.to,
        isEditing: true
      });
    }
  };

  const inputValue = {
    from: state.isEditing ? state.from : value.from,
    to: state.isEditing ? state.to : value.to
  };

  return (
    <div>
      <div
        css={css`
          position: relative;
          padding: 10px;
          display: flex;
          flex-direction: space-between;
          align-items: center;
        `}
      >
        <div>
          <Input
            type={"number"}
            placeholder={"from"}
            unit={unit}
            onChange={event => setValue(event.target.value, "from")}
            value={inputValue.from}
            onBlur={() => onBlur("from")}
            onFocus={onFocus}
          />
        </div>

        <div
          css={css`
            width: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          -
        </div>
        <div>
          <Input
            type={"number"}
            placeholder={"to"}
            unit={unit}
            value={inputValue.to}
            onChange={event => setValue(event.target.value, "to")}
            onBlur={() => onBlur("to")}
            onFocus={onFocus}
          />
        </div>
      </div>
      {isClearable && (
        <div>
          <Button
            kind={"minimal"}
            size={"compact"}
            onClick={() => {
              if (onChange) {
                onChange({});
              }
            }}
          >
            clear
          </Button>
        </div>
      )}
    </div>
  );
};

RangePicker.defaultProps = {
  neverEmpty: false,
  snapToMinMax: true
};

RangePicker.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  neverEmpty: PropTypes.bool,
  unit: PropTypes.string,
  snapToMinMax: PropTypes.bool
};

const overrides = {
  Header: AccordionHeader,
  filterComponents: {
    select: ({ filter, onChange }) => (
      <ItemListAccordion
        items={filter.items}
        value={filter.value}
        onChange={onChange}
        multiple={filter.multiple}
      />
    ),
    range: ({ filter, onChange }) => (
      <RangePicker
        value={filter.value}
        onChange={onChange}
        unit={filter.unit}
        min={filter.min}
        max={filter.max}
        neverEmpty={true}
        snapToMinMax={true}
      />
    )
  }
};

const FiltersColumn = props => (
  <FiltersColumn$ overrides={overrides} {...props} />
);

export { FiltersColumn };
