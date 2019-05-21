import React from "react";
import PropTypes from "prop-types";

import { RangeMap, rs, rm } from "responsive-helpers";
import Layout from "../Layout";

import styled from "@emotion/styled";

/**
 * For some time this GridRow had: `overflow: hidden`
 * I removed it because it made StickyWrapper not work. To remember.
 */

const GridContext = React.createContext(null);

const GridRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${props => props.gutter.divide(-2).css("margin-left")}
  ${props => props.gutter.divide(-2).css("margin-right")}
`;

function normalizeParams(params) {
  if (typeof params === "number" || Array.isArray(params)) {
    return {
      0: params
    };
  }
  return params;
}

const GridItemStyled = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  ${props => props.gutter.divide(2).css("padding-left")}
  ${props =>
    props.gutter.divide(2).css("padding-right")}
    box-sizing: border-box;

  ${props =>
    props.params.crosssect(props.colNumber).css(entry => {
      let params = Layout.normalizeGridItemParams(entry.val1);
      let colNumber = entry.val2;

      return `
            flex: 0 0 ${(params.cols / colNumber) * 100}%;
            max-width: ${(params.cols / colNumber) * 100}%;
            ${
              params.offset > 0
                ? `margin-left: ${(params.offset / colNumber) * 100}%;`
                : ""
            }
            ${params.order !== 0 ? `order: ${params.order};` : ""}
            ${params.cols === 0 ? "display: none;" : ""}
            
            ${props.gutterVertical.css("margin-bottom")}
        `;
    })}
`;

const GridItem = function(props) {
  return (
    <GridContext.Consumer>
      {({ gutter, gutterVertical, colNumber }) => (
        <GridItemStyled
          params={new RangeMap(normalizeParams(props.params))}
          gutter={gutter}
          gutterVertical={gutterVertical}
          colNumber={colNumber}
        >
          <div
            className={props.className}
            style={{ ...props.style, height: "100%" }}
          >
            {props.children}
          </div>
        </GridItemStyled>
      )}
    </GridContext.Consumer>
  );
};

GridItem.propTypes = {
  params: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  __extraStyles: PropTypes.string
};

GridItem.defaultProps = {
  __extraStyles: ""
};

const Grid = function(props) {
  let colNumber = rm(props.colNumber || Layout.main.colNumber);
  let gutter = rs(props.gutter || Layout.main.gutter);
  let gutterVertical = rs(props.gutterVertical || 0);

  // Validation
  if (!colNumber || !gutter) {
    throw new Error(
      "Grid: colNumber or gutter not defined. When using Grid you must either provide colNumber and gutter properties or define Layout.main"
    );
  }

  return (
    <div className={props.className} style={props.style}>
      <GridRow gutter={gutter}>
        <GridContext.Provider
          value={{
            gutter: gutter,
            colNumber: colNumber,
            gutterVertical: gutterVertical
          }}
        >
          {props.children}
        </GridContext.Provider>
      </GridRow>
    </div>
  );
};

Grid.propTypes = {
  gutter: PropTypes.any,
  colNumber: PropTypes.number
};

export { Grid, GridItem };
