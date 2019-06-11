import React, { useState, useRef } from "react";

import { css } from "@emotion/core";
import { Input } from "../../../demo/theme/Input";
import PropTypes from "prop-types";

const RangePicker$ = props => {
  const { initialState, onChange, min, max, defaultToMinMax } = props;

  const defaultFrom = defaultToMinMax ? min : "";
  const defaultTo = defaultToMinMax ? max : "";

  const [state, setState] = useState({
    from: initialState.from || defaultFrom,
    to: initialState.to || defaultTo
  });

  const isStateValid = () => {
    return !(
      typeof state.from === "number" &&
      typeof state.to === "number" &&
      state.from > state.to
    );
  };

  // Timeout prevents from calling onChange too early (when we blurred and focused second field of range picker)
  const onBlur = input => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      if (isStateValid()) {
        return;
      }

      if (input === "from") {
        setState({
          from: defaultFrom
        });
      } else {
        setState({
          to: defaultTo
        });
      }
    }, 0);
  };

  const timeout = useRef(null);

  const setValue = (val, input) => {
    val = parseFloat(val);
    if (isNaN(val)) {
      val = "";
    }

    setState({
      [input]: val
    });
  };

  const onFocus = () => {
    clearTimeout(timeout.current);
  };

  return (
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
          unit={"zł"}
          onChange={event => setValue(event.target.value, "from")}
          value={from}
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
          unit={"zł"}
          value={to}
          onChange={event => setValue(event.target.value, "to")}
          onBlur={() => onBlur("to")}
          onFocus={onFocus}
        />
      </div>
    </div>
  );
};

RangePicker$.defaultProps = {
  defaultToMinMax: true,
  initialState: {}
};

RangePicker$.propTypes = {
  initialState: PropTypes.object,
  onChange: PropTypes.function,
  min: PropTypes.number,
  max: PropTypes.number,
  defaultToMinMax: PropTypes.bool
};

export { RangePicker$ };
