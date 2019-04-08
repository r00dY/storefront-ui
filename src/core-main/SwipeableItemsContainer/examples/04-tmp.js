import React, { useRef } from "react";
import {SwipeableItemsContainer, useSwipeableItemsContainer } from "storefront-ui";
import { useAbstractSlider } from "../SwipeableItemsContainer";

import {rslin} from "responsive-helpers";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import Rectangle from "./01-standard-use";

export default () => {

    let ref = useRef(null);

    let abstractSwiper = useAbstractSlider({
        containerSize: () => 500,
        count: 5,
        slideSize: () => 400
    }, {
        move: (state) => {
            console.log(state.pos);
        }
    });

    return <div>
        slideableWidth: { abstractSwiper.slideableWidth } <br /><br />
        <button onClick={() => { abstractSwiper.moveToNext() }}>move to next</button> <br/><br/>
        active slide: { abstractSwiper.active } <br /><br/>
        first active: { abstractSwiper.isFirstActive ? 'yes' : 'no' } <br /><br/>
        last active: { abstractSwiper.isLastActive ? 'yes' : 'no' } <br /><br/>


        {/*<SwipeableItemsContainer mode={"horizontal"} itemSize={250} gutter={20} offsetBefore={50} offsetAfter={50} snap={"center"} ref={ref}>*/}
            {/*<Rectangle color={"coral"}>1</Rectangle>*/}
            {/*<Rectangle color={"darkgoldenrod"}>2</Rectangle>*/}
            {/*<Rectangle color={"maroon"}>3</Rectangle>*/}
            {/*<Rectangle color={"navy"}>4</Rectangle>*/}
            {/*<Rectangle color={"firebrick"}>5</Rectangle>*/}
            {/*<Rectangle color={"forestgreen"}>6</Rectangle>*/}
        {/*</SwipeableItemsContainer>*/}

    </div>
};
