import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

class VariableHeightColumn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: props.height
    };
  }

  handleHeightChange(delta) {
    this.setState({
      height: Math.max(0, this.state.height + delta)
    });
  }

  render() {
    return (
      <div
        css={css`
          position: relative;
          border: 1px solid ${this.props.color};
          width: 100%;
          height: ${this.state.height}px;
          overflow: hidden;
          transition: height 0.5s ease-out;
        `}
      >
        <div
          css={css`
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            padding: 5px;
          `}
        >
          {[...Array(500)].map((e, i) => {
            return (
              <span key={i}>
                {i}
                <br />
                {i % 10 === 0 && (
                  <div>
                    <button
                      onClick={() => {
                        this.handleHeightChange(300);
                      }}
                    >
                      +300
                    </button>
                    <br />
                    <button
                      onClick={() => {
                        this.handleHeightChange(-300);
                      }}
                    >
                      -300
                    </button>
                    <br />
                  </div>
                )}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default VariableHeightColumn;
