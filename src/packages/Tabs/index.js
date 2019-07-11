import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { getOverrides } from "../base/helpers/overrides";
import {
  TabStyled,
  RootStyled,
  TabsContainerStyled,
  LineStyled
} from "./styled-components";

import { rs } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function Tabs$(props) {
  let {
    overrides: { TabBar: tabbar, TabContent: TabContentOverride },
    data,
    active,
    onChange
  } = props;

  return (
    <div>
      {tabbar}
      <div>
        {data.map((tab, index) => (
          <div
            css={css`
              ${active === index ? "" : "display: none;"}
            `}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

Tabs$.defaultProps = {
  overrides: {}
};

Tabs$.propTypes = {
  overrides: PropTypes.object,
  active: PropTypes.any,
  onChange: PropTypes.func
};

export { Tabs$ };
