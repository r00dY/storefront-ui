import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { getOverrides } from "../base/helpers/overrides";
import { TabStyled, RootStyled } from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function Tabs$(props) {
  const {
    overrides: { Root: RootOverride, Tab: tab },
    data,
    active,
    onChange
  } = props;

  const rootRef = useRef(null);
  const lineRef = useRef(null);

  const itemRefs = [];
  for (let i = 0; i < data.length; i++) {
    itemRefs.push(React.createRef());
  }

  const activeIndex = data.indexOf(active);

  useEffect(() => {
    /**
     * trivial scrollBy behaviour
     */
    const itemRect = itemRefs[activeIndex].current.getBoundingClientRect();
    const containerRect = rootRef.current.getBoundingClientRect();

    const leftDiff = itemRect.left - containerRect.left;
    const rightDiff = -(itemRect.right - containerRect.right);
    let scrollBy;

    if (leftDiff < 0 && rightDiff < 0) {
      // do nothing, item is wider than container
    } else if (leftDiff < 0) {
      scrollBy = -(-leftDiff + 50);
    } else if (rightDiff < 0) {
      scrollBy = -rightDiff + 50;
    }

    if (scrollBy) {
      rootRef.current.scrollBy({
        left: scrollBy,
        behavior: "smooth"
      });
    }

    const activeTabLeft = itemRefs[activeIndex].current.offsetLeft;
    const activeTabWidth = itemRect.width;

    /**
     * Line scrolling
     */
    lineRef.current.style.transform = `translateX(${activeTabLeft}px)`;
    lineRef.current.style.width = `${activeTabWidth}px`;
  });

  const sharedProps = {};

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);

  const activate = (tabData, index) => {
    if (onChange) {
      onChange(tabData);
    }
  };

  return (
    <Root {...sharedProps} {...rootProps} ref={rootRef}>
      {data.map((tabData, index) =>
        tab({
          tabData,
          active: tabData === active,
          activate: () => activate(tabData, index),
          ref: itemRefs[index]
        })
      )}

      <div
        css={css`
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          background-color: aqua;
          transition: all 0.15s ease-out;
          width: 0px;
        `}
        ref={lineRef}
      />
    </Root>
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
