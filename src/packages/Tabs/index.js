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
    overrides: {
      Root: RootOverride,
      Tab: tab,
      TabsContainer: TabsContainerOverride,
      TabContent: TabContentOverride,
      Separator: separator,
      Line: LineOverride
    },
    data,
    active,
    onChange,
    gutter
  } = props;

  return <div />;
}

Tabs$.defaultProps = {
  overrides: {},
  gutter: 0
};

Tabs$.propTypes = {
  overrides: PropTypes.object,
  active: PropTypes.any,
  onChange: PropTypes.func,
  gutter: PropTypes.any
};

export { Tabs$ };
