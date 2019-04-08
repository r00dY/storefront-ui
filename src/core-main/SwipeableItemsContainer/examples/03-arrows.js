import React from "react";
import {SwipeableItemsContainer, useSwipeableItemsContainer } from "storefront-ui";

import {rslin} from "responsive-helpers";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import Rectangle from "../../../../docs-utils/Rectangle";

const Arrow = ({ color }) => <div css={css`width: 50px; height: 50px; background-color: ${color}; &:hover { opacity: 0.5 }`}></div>

export default () => {
    return <div>
        <SwipeableItemsContainer mode={"horizontal"} arrows={{
            left: <Arrow color={"red"} />,
            right: <Arrow color={"blue"} />,
            offset: -25,
            showOnlyOnHover: true
        }}>
            <Rectangle color={"coral"}>1</Rectangle>
            <Rectangle color={"darkgoldenrod"}>2</Rectangle>
            <Rectangle color={"maroon"}>3</Rectangle>
            <Rectangle color={"navy"}>4</Rectangle>
            <Rectangle color={"firebrick"}>5</Rectangle>
            <Rectangle color={"forestgreen"}>6</Rectangle>
        </SwipeableItemsContainer>

    </div>
};
