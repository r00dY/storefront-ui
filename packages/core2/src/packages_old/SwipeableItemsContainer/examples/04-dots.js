import React from "react";
import SwipeableItemsContainer, {
  useSwipeableItemsContainer
} from "@commerce-ui/core/SwipeableItemsContainer";
import Dots from "@commerce-ui/core/Dots";
import MediaQuery from "@commerce-ui/core/MediaQuery";
import Color from "@commerce-ui/core/Color";
import { R } from "responsive-helpers";

import { rslin } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Rectangle from "../../../../docs-utils/Rectangle";

export default () => {
  let swiper = useSwipeableItemsContainer(
    <SwipeableItemsContainer mode={"horizontal"}>
      <Rectangle color={"coral"}>1</Rectangle>
      <Rectangle color={"darkgoldenrod"}>2</Rectangle>
      <Rectangle color={"maroon"}>3</Rectangle>
      <Rectangle color={"navy"}>4</Rectangle>
      <Rectangle color={"firebrick"}>5</Rectangle>
      <Rectangle color={"forestgreen"}>6</Rectangle>
    </SwipeableItemsContainer>
  );

  return (
    <div>
      {swiper.element}

      <Dots swipeableItemsContainer={swiper} />

      <p>
        Dots might have other variants and are pretty much customisable.
        Vertical:
      </p>
      <Dots swipeableItemsContainer={swiper} vertical={true} />

      <p>Very custom</p>
      <Dots
        swipeableItemsContainer={swiper}
        spaceWidth={30}
        spaceHeight={30}
        hoverColor={new Color("red")}
        dotSize={10}
        color={new Color("blue")}
        activeColor={new Color("coral")}
      />

      <p>
        Dots without <code>swipeableItemsContainer</code> prop, but using swiper
        state directly
      </p>
      <Dots
        amount={swiper.count}
        onClick={i => swiper.moveToSlide(i)}
        active={
          typeof swiper.active === "undefined" ? undefined : swiper.active[0]
        }
      />
    </div>
  );
};
