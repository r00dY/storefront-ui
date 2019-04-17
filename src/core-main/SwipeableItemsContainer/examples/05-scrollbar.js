import React from "react";
import { useSwipeableItemsContainer, SwipeableItemsContainer, ScrollBar } from "storefront-ui";

import {rslin} from "responsive-helpers";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

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

    /**
     * Scrollbar should pass handle and should listen to "onMove" and "onInit", "onDestroy"!
     *
     * It won't have any state at first (just width 0), and onMove won't be called after init. That's why it should get onInit event. or general "onStateChange"? Sth like this.
     *
     * <ScrollBar swipeableItemsContainer={handle} />
     * <Dots swipeableItemsContainer={handle} />
     *
     */

    return <div>
        { swiper.element }
        <ScrollBar swipeableItemsContainer={swiper} />

    </div>;

};
