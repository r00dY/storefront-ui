import React from "react";

import { MenuDesktop$ } from "storefront-ui/MenuDesktop";
import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import LayoutRow from "storefront-ui/LayoutRow";
import useScrollDirection from "storefront-ui/useScrollDirection";
import useScrollSegment from "storefront-ui/useScrollSegment";
import Container from "storefront-ui/Container";

import { Button } from "../Button";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { StatefulPopover } from "../Popover";
import MiniBasketContent from "../MiniBasketContent";

const MenuDesktop = props => {
  const direction = useScrollDirection();
  const segment = useScrollSegment({ 1: "not-top", 1000: "hideable" });

  return (
    <MenuDesktop$
      overrides={{
        MenuButton: ({ index, menu, isActive, setActive, buttonProps }) => (
          <Button
            key={index}
            kind={"minimal"}
            isSelected={isActive}
            {...buttonProps}
          >
            {menu.label}
          </Button>
        ),
        MenuBar: ({ buttons }) => (
          <div
            css={css`
              position: relative;
              overflow: hidden;
            `}
          >
            <div
              css={css`
                background-color: lightgrey;
                transition: transform 0.15s ease-out;

                transform: ${segment === "hideable" && direction === true
                  ? "translateY(-100%)"
                  : "none"};

                border-bottom: ${segment === "hideable" || segment === "not-top"
                  ? "1px solid black"
                  : "none"};
              `}
            >
              <Container>
                <LayoutLeftCenterRight
                  height={50}
                  left={
                    <LayoutRow>
                      <div>A</div>
                      <div>B</div>
                      <div>C</div>
                    </LayoutRow>
                  }
                  right={
                    <StatefulPopover
                      content={<MiniBasketContent />}
                      accessibilityType={"tooltip"}
                      placement={StatefulPopover.PLACEMENT.bottomRight}
                    >
                      <Button kind={"minimal"}>Bag (1)</Button>
                    </StatefulPopover>
                  }
                  center={buttons}
                />
              </Container>
            </div>
          </div>
        )
      }}
      renderMenuContent={true}
      mode={"fixed"}
      debounce={200}
      {...props}
    />
  );
};

export default MenuDesktop;
