import React from "react";
import { useSwipeableItemsContainer, SwipeableItemsContainer, Dots, Color } from "storefront-ui";

import {rslin} from "responsive-helpers";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import Rectangle from "../../../../docs-utils/Rectangle";

export default () => {
    let { Element, moveToSlide, active } = useSwipeableItemsContainer(
        <SwipeableItemsContainer mode={"horizontal"}>
            <Rectangle color={"coral"}>1</Rectangle>
            <Rectangle color={"darkgoldenrod"}>2</Rectangle>
            <Rectangle color={"maroon"}>3</Rectangle>
            <Rectangle color={"navy"}>4</Rectangle>
            <Rectangle color={"firebrick"}>5</Rectangle>
            <Rectangle color={"forestgreen"}>6</Rectangle>
        </SwipeableItemsContainer>
    );

    return <div>
        { Element }
        <Dots active={active} onClick={moveToSlide} amount={6} />
        <p>Dots might have other variants and are pretty much customisable. Vertical:</p>
        <Dots
            active={active}
            onClick={moveToSlide}
            amount={6}
            vertical={true}
        />
        <p>Very custom</p>
        <Dots
            active={active}
            onClick={moveToSlide}
            amount={6}
            spaceWidth={30}
            spaceHeight={30}
            hoverColor={new Color("red")}
            dotSize={10}
            color={new Color("blue")}
            activeColor={new Color("coral")}
        />

    </div>;

};
