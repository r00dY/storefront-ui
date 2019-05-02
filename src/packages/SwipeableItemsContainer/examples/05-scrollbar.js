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


    let swiper2 = useSwipeableItemsContainer(
        <SwipeableItemsContainer mode={"horizontal"} offsetBefore={100} offsetAfter={100}>
            <Rectangle color={"coral"}>1</Rectangle>
            <Rectangle color={"darkgoldenrod"}>2</Rectangle>
            <Rectangle color={"maroon"}>3</Rectangle>
            <Rectangle color={"navy"}>4</Rectangle>
            <Rectangle color={"firebrick"}>5</Rectangle>
            <Rectangle color={"forestgreen"}>6</Rectangle>
        </SwipeableItemsContainer>
    );

    return <div>
        { swiper.element }
        <ScrollBar swipeableItemsContainer={swiper} />

        <br/>

        { swiper2.element }
        <ScrollBar swipeableItemsContainer={swiper2} />
    </div>;

};
