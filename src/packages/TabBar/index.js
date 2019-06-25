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

function TabBar$(props) {
  let {
    overrides: {
      Root: RootOverride,
      Tab: tab,
      TabsContainer: TabsContainerOverride,
      Separator: separator,
      Line: LineOverride
    },
    data,
    active,
    onChange,
    gutter
  } = props;

  const rootRef = useRef(null);
  const lineRef = useRef(null);
  const firstMount = useRef(true);

  const itemRefs = [];
  for (let i = 0; i < data.length; i++) {
    itemRefs.push(React.createRef());
  }

  const activeIndex = data.indexOf(active);

  gutter = rs(gutter);

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
      scrollBy = -(-leftDiff + 100);
    } else if (rightDiff < 0) {
      scrollBy = -rightDiff + 100;
    }

    if (scrollBy) {
      rootRef.current.scrollBy({
        left: scrollBy,
        behavior: firstMount.current ? "auto" : "smooth"
      });
    }

    const activeTabLeft = itemRefs[activeIndex].current.offsetLeft;
    const activeTabWidth = itemRect.width;

    /**
     * Line scrolling
     */
    lineRef.current.style.transform = `translateX(${activeTabLeft}px)`;
    lineRef.current.style.width = `${activeTabWidth}px`;

    if (firstMount.current) {
      // This is set here to prevent animating at mount
      setTimeout(() => {
        lineRef.current.style.transition = "all 0.15s ease-out";
      }, 500);
    } else {
      lineRef.current.style.transition = "all 0.15s ease-out";
    }

    firstMount.current = false;
  });

  const sharedProps = {};

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);
  const [TabsContainer, tabsContainerProps] = getOverrides(
    TabsContainerOverride,
    TabsContainerStyled
  );
  const [Line, lineProps] = getOverrides(LineOverride, LineStyled);

  const activate = (tabData, index) => {
    if (onChange) {
      onChange(tabData);
    }
  };

  let items = [];
  data.forEach((tabData, index) => {
    if (separator && index > 0) {
      items.push(
        <div
          css={css`
            ${gutter.css("margin-right")}
          `}
        >
          {separator({ ...sharedProps, tabData, index })}
        </div>
      );
    }

    items.push(
      <div
        css={css`
          ${gutter.css("margin-right")}
        `}
      >
        {tab({
          tabData,
          active: tabData === active,
          activate: () => activate(tabData, index),
          ref: itemRefs[index],
          index
        })}
      </div>
    );
  });

  return (
    <Root {...sharedProps} {...rootProps} $ref={rootRef}>
      <TabsContainer {...sharedProps} {...tabsContainerProps}>
        {items}

        <Line $ref={lineRef} {...lineProps} />
      </TabsContainer>
    </Root>
  );
}

TabBar$.defaultProps = {
  overrides: {},
  gutter: 0
};

TabBar$.propTypes = {
  overrides: PropTypes.object,
  active: PropTypes.any,
  onChange: PropTypes.func,
  gutter: PropTypes.any
};

export { TabBar$ };
