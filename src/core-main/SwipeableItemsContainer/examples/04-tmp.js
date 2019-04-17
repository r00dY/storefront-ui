import React, { useState } from "react";
import { useAbstractSlider } from "../SwipeableItemsContainer";

export default () => {
    const [state, setState] = useState(5);

    let abstractSwiper = useAbstractSlider({
        containerSize: () => 500,
        count: state,
        slideSize: () => 400
    }, state < 7 ? {
        move: (state) => {
            console.log(state.pos);
        }
    } : {});

    return <div>
        <button onClick={() => { abstractSwiper.moveToNext() }}>move to next</button> <br/><br/>
        <button onClick={() => { abstractSwiper.moveToSlide(0) }}>move to 0</button> <br/><br/>
        active slide: { abstractSwiper.active } <br /><br/>
        first active: { abstractSwiper.isFirstActive ? 'yes' : 'no' } <br /><br/>
        last active: { abstractSwiper.isLastActive ? 'yes' : 'no' } <br /><br/>
        <button onClick={() => setState(state + 1)}>{ state }</button>
    </div>
};
