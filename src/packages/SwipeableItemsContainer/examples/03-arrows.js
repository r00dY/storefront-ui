import React from "react";
import SwipeableItemsContainer, {
  useSwipeableItemsContainer
} from "@commerce-ui/core/SwipeableItemsContainer";

import { rslin } from "responsive-helpers";
import { ButtonRaw } from "../../../../demo/components/ButtonRaw";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Rectangle from "../../../../docs-utils/Rectangle";

const Arrow = ({ color }) => (
  <div
    css={css`
      width: 50px;
      height: 50px;
      background-color: ${color};
      &:hover {
        opacity: 0.5;
      }
    `}
  />
);

export default () => {
  return (
    <div>
      <p>Simplest use case</p>
      <SwipeableItemsContainer
        mode={"horizontal"}
        arrows={{
          left: ({ onClick }) => (
            <ButtonRaw onClick={onClick}>
              <Arrow color={"red"} />
            </ButtonRaw>
          ),
          right: ({ onClick }) => (
            <ButtonRaw onClick={onClick}>
              <Arrow color={"blue"} />
            </ButtonRaw>
          )
        }}
      >
        <Rectangle color={"coral"}>1</Rectangle>
        <Rectangle color={"darkgoldenrod"}>2</Rectangle>
        <Rectangle color={"maroon"}>3</Rectangle>
        <Rectangle color={"navy"}>4</Rectangle>
        <Rectangle color={"firebrick"}>5</Rectangle>
        <Rectangle color={"forestgreen"}>6</Rectangle>
      </SwipeableItemsContainer>

      <p>
        Arrows visible on hover (<code>showOnlyOnHover</code> option), hidden
        when inactive (<code>hideWhenInactive</code>), also added{" "}
        <code>offset</code>. <strong>Imporant -> </strong>on touch devices
        arrows will be visible anyway (can be disabled with{" "}
        <code>hideOnTouchDevices</code>)
      </p>

      <SwipeableItemsContainer
        mode={"horizontal"}
        arrows={{
          left: ({ onClick }) => (
            <ButtonRaw onClick={onClick}>
              <Arrow color={"red"} />
            </ButtonRaw>
          ),
          right: ({ onClick }) => (
            <ButtonRaw onClick={onClick}>
              <Arrow color={"blue"} />
            </ButtonRaw>
          ),
          offset: -25,
          showOnlyOnHover: true,
          hideWhenInactive: true
        }}
      >
        <Rectangle color={"coral"}>1</Rectangle>
        <Rectangle color={"darkgoldenrod"}>2</Rectangle>
        <Rectangle color={"maroon"}>3</Rectangle>
        <Rectangle color={"navy"}>4</Rectangle>
        <Rectangle color={"firebrick"}>5</Rectangle>
        <Rectangle color={"forestgreen"}>6</Rectangle>
      </SwipeableItemsContainer>

      <p>
        <code>hideOnTouchDevices=true</code> + <code>externalOffset</code>
      </p>

      <SwipeableItemsContainer
        mode={"horizontal"}
        arrows={{
          left: ({ onClick }) => (
            <ButtonRaw onClick={onClick}>
              <Arrow color={"red"} />
            </ButtonRaw>
          ),
          right: ({ onClick }) => (
            <ButtonRaw onClick={onClick}>
              <Arrow color={"blue"} />
            </ButtonRaw>
          ),
          hideOnTouchDevices: true
        }}
        externalOffsetBefore={{ xs: 50, md: 100 }}
        externalOffsetAfter={{ xs: 50, md: 100 }}
      >
        <Rectangle color={"coral"}>1</Rectangle>
        <Rectangle color={"darkgoldenrod"}>2</Rectangle>
        <Rectangle color={"maroon"}>3</Rectangle>
        <Rectangle color={"navy"}>4</Rectangle>
        <Rectangle color={"firebrick"}>5</Rectangle>
        <Rectangle color={"forestgreen"}>6</Rectangle>
      </SwipeableItemsContainer>
    </div>
  );
};
