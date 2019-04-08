import React from "react";
import {SwipeableItemsContainer, useSwipeableItemsContainer } from "storefront-ui";

import {rslin} from "responsive-helpers";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import Rectangle from "../../../../docs-utils/Rectangle";

export default () => {
    // let { ref, active, setActive } = useSwipeableItemsContainer();

    return <div>
        <p>Simplest use case</p>
        {/*<SwipeableItemsContainer mode={"horizontal"} ref={ref}>*/}
            {/*<Rectangle color={"coral"}>1</Rectangle>*/}
            {/*<Rectangle color={"darkgoldenrod"}>2</Rectangle>*/}
            {/*<Rectangle color={"maroon"}>3</Rectangle>*/}
            {/*<Rectangle color={"navy"}>4</Rectangle>*/}
            {/*<Rectangle color={"firebrick"}>5</Rectangle>*/}
            {/*<Rectangle color={"forestgreen"}>6</Rectangle>*/}
        {/*</SwipeableItemsContainer>*/}
        {/*<div>Active: { active }</div>*/}
        {/*<button onClick={() => setActive(3, false)}>Set active 3</button><br/>*/}
        {/*<button onClick={() => setActive(3, true)}>Set active 3 animated</button>*/}
    </div>
};
