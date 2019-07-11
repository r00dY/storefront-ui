import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getOverrides } from "../base/helpers/overrides";
import {
  TabStyled,
  RootStyled,
  TabsContainerStyled,
  TabContentStyled,
  LineStyled
} from "./styled-components";

import { ButtonRaw$ } from "../ButtonRaw";

import { rs } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function TabBar$(props) {
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
    gutter,
    scrollable,
    align,
    showPanels
  } = props;

  const [focus, setFocus] = useState(false);

  const rootRef = useRef(null);
  const lineRef = useRef(null);
  const firstMount = useRef(true);

  const itemRefs = [];
  for (let i = 0; i < data.length; i++) {
    itemRefs.push(React.createRef());
  }

  gutter = rs(gutter);

  // If scrollable, fit doesn't work (if items take less space than container)  TODO: To think about later
  if (scrollable && align === "fit") {
    align = "left";
  }

  useEffect(() => {
    const itemRect = itemRefs[active].current.getBoundingClientRect();

    if (scrollable) {
      /**
       * trivial scrollBy behaviour
       */
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
    }

    /**
     * Line scrolling
     */

    const activeTabLeft = itemRefs[active].current.offsetLeft;
    const activeTabWidth = itemRect.width;

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
  const [TabContent, tabContentProps] = getOverrides(
    TabContentOverride,
    TabContentStyled
  );

  const activate = index => {
    if (onChange) {
      onChange(index);
    }
  };

  let items = [];
  data.forEach((tabData, index) => {
    if (separator && index > 0) {
      items.push(
        <div
          css={css`
            ${gutter.css("margin-right")}
            flex-grow: 0;
            flex-shrink: 0;
          `}
        >
          {separator({ ...sharedProps, tabData, index })}
        </div>
      );
    }

    items.push(
      <ButtonRaw$
        css={css`
          ${index === data.length - 1 ? "" : gutter.css("margin-right")}

          ${align === "fit"
            ? `
                    flex-grow: 1;
                    flex-shrink: 1;
                `
            : ""}
        `}
        onClick={() => activate(index)}
        $ref={itemRefs[index]}
        href={tabData.href}
        tabIndex={index === active ? 0 : -1}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        overrides={{
          Root: {
            style: `outline: none;`
          }
        }}
      >
        {tab({
          tabData,
          active: index === active,
          focus: index === active && focus,
          index
        })}
      </ButtonRaw$>
    );
  });

  return (
    <Root {...sharedProps} {...rootProps}>
      <div
        css={css`
          position: relative;

          ${scrollable
            ? `
                overflow-x: auto;
                ::-webkit-scrollbar {display:none;}
                `
            : `overflow: hidden;`}

          ${align !== "fit" ? "display: flex" : ""};
        `}
        ref={rootRef}
      >
        <TabsContainer {...sharedProps} {...tabsContainerProps} align={align}>
          {items}

          <Line $ref={lineRef} {...lineProps} />
        </TabsContainer>
      </div>

      {showPanels &&
        data.map((tabData, index) => (
          <TabContent {...tabContentProps} active={index === active}>
            {tabData.panel}
          </TabContent>
        ))}
    </Root>
  );
}

TabBar$.defaultProps = {
  overrides: {},
  gutter: 0,
  scrollable: true,
  align: "left",
  showPanels: false
};

TabBar$.propTypes = {
  overrides: PropTypes.object,
  active: PropTypes.any,
  onChange: PropTypes.func,
  gutter: PropTypes.any,
  scrollable: PropTypes.bool,
  align: PropTypes.oneOf(["left", "center", "right", "fit"]),
  showPanels: PropTypes.bool
};

export { TabBar$ };
