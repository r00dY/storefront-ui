import React, { useRef } from "react";
import {SwipeableItemsContainer, useSwipeableItemsContainer } from "storefront-ui";
import { useAbstractSlider } from "../SwipeableItemsContainer";

import {rslin} from "responsive-helpers";

export default () => {

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
        <button onClick={() => { abstractSwiper.moveToSlide(0) }}>move to 0</button> <br/><br/>
        active slide: { abstractSwiper.active } <br /><br/>
        first active: { abstractSwiper.isFirstActive ? 'yes' : 'no' } <br /><br/>
        last active: { abstractSwiper.isLastActive ? 'yes' : 'no' } <br /><br/>
    </div>
};
